import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../Models/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
  goTo(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }

}
