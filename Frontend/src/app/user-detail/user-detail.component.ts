import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any;
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getUser(this.route.snapshot.params.userId).subscribe((data: {}) => {
       console.log(data);
       this.user = data;
    });
  }

}
