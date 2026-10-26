import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from './models/user';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');

  // userService = inject(UserService);

  // users= toSignal<User[]>(this.userService.getUsers());

  users = signal<User[]>([]);
  name = signal<string>('');
  email = signal<string>('');

  editingUpdateID = signal<number | null>(null);

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users.set(users);
    });
  }

  editUser(user: User) {
    this.editingUpdateID.set(user.id!);
    this.name.set(user.name);
    this.email.set(user.email);
    console.log(user);
  }

  submitForm() {
    const payload: User = {
      name: this.name(),
      email: this.email(),
      isActive: true
    };
    // update existing user
    if (this.editingUpdateID()) {
      this.userService.updateUser(this.editingUpdateID()!, payload).subscribe(() => {
        alert('User updated successfully');
        this.afterSave();
      });
    } else {
      // add new user
      this.userService.addUser(payload).subscribe(() => {
        alert('User added successfully');
        this.afterSave
      })
    }


  }

  toggleStatus(user: User) {
    this.userService.updateUserStatus(user.id!, !user.isActive).subscribe(() => {
      this.users.update(list =>
        list.map(u => u.id === user.id ? { ...u, isActive: !user.isActive } : u)
      )
      alert('User status updated successfully');
      this.loadUsers();
    });
  }

  deleteUser(user: User) {
    if (!confirm('Are you sure you want to delete this user?')) return;
    this.userService.deleteUser(user.id!).subscribe(() => {
      this.users.update(list => list.filter(u => u.id !== user.id));
      alert('User deleted successfully');
      this.loadUsers();
    });
  }

  afterSave() {
    this.loadUsers();
    this.name.set('');
    this.email.set('');
    this.editingUpdateID.set(null);
  }



}
