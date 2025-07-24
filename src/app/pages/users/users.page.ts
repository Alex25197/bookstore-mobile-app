import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';
import { UserAccordionComponent } from '../../shared/components/user-accordion/user-accordion.component';
import { ModalService } from '../../shared/services/modal.service';
import { CreateUserModalComponent } from '../../shared/components/create-user-modal/create-user-modal.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [SharedModule, UserAccordionComponent]
})
export class UsersPage implements OnInit {
  users: User[] = [];
  isLoading = false;

  constructor(
    private userService: UserService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    this.isLoading = true;
    try {
      const users = await firstValueFrom(this.userService.getUsers());
      this.users = users || [];
    } catch (error) {
      console.error('Error loading users:', error);
      this.users = [];
    } finally {
      this.isLoading = false;
    }
  }

  async openCreateUserModal() {
    const modal = await this.modalService.present(CreateUserModalComponent);
    const result = await modal.onWillDismiss();
    
    if (result.data?.success) {
      await this.loadUsers(); // Recargar la lista después de crear un usuario
    }
  }

  async handleRefresh(event: any) {
    await this.loadUsers();
    event.target.complete();
  }
} 