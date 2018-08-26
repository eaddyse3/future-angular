import { Injectable } from '@angular/core';
import { Skill } from "../models/skill";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {  name: 'Angular' },
    
    {  name:  'CSS' },
    
    {  name:  'HTML'}
    ];
  constructor() { }
}
