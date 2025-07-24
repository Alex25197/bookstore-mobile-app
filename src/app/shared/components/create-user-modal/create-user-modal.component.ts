import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { ModalService } from '../../services/modal.service';
import { UserService } from '../../../core/services/user.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, BaseModalComponent]
})
export class CreateUserModalComponent {
  userForm: FormGroup;
  isLoading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]]
    });
  }

  async onSubmit() {
    if (this.userForm.valid) {
      this.isLoading = true;
      this.error = null;

      try {
        const newUser = await firstValueFrom(this.userService.createUser(this.userForm.value));
        this.modalService.dismiss({ success: true, user: newUser });
      } catch (err) {
        console.error('Error creating user:', err);
        this.error = 'Error al crear el usuario. Por favor, intente nuevamente.';
      } finally {
        this.isLoading = false;
      }
    }
  }

  onDismiss() {
    this.modalService.dismiss();
  }
} 