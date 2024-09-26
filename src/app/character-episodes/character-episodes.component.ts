import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyServiceService } from '../service/rick-and-morty-service.service';

@Component({
  selector: 'app-character-episodes',
  templateUrl: './character-episodes.component.html',
  styleUrls: ['./character-episodes.component.css']
})
export class CharacterEpisodesComponent implements OnInit {
  characterId: number | undefined;
  character: any;
  episodes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyServiceService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.characterId = +idParam;

      
      this.rickAndMortyService.getCharacterById(this.characterId).subscribe((characterData: any) => {
        this.character = characterData; 
      });

      this.rickAndMortyService.getCharacterEpisodes(this.characterId).subscribe((data: any) => {
        this.episodes = data.episode;
      });
    } 
  }
}
