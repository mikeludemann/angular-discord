import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.css']
})
export class DiscordComponent implements OnInit {

  @Input() discordID: object;

  @ViewChild('discord') el: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
