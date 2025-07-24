import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';
import { UserAccordionComponent } from '../../shared/components/user-accordion/user-accordion.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [SharedModule, UserAccordionComponent]
})
export class UsersPage implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
} 