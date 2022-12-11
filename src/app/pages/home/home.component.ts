import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public lists = [
    'Generalne sprzątanie wszystkich pomieszczeń i uruchomienie obiektu',
    'Końcowa kontrola systemów inżynierskich i uruchomienie',
    'Montaż elementów wystroju wnętrz (obrazy, instalacje, lustra itp.)',
    'Расстановка мебели',
    'Montaż paneli napowietrznych, przycisków, włączników w puszkach gniazdowych',
    'Montaż elementów oświetleniowych (żyrandole, kinkiety, lampy, oświetlenie wnętrz)',
    'Montaż gzymsów',
    'Montaż urządzeń sanitarnych (wanny, umywalki, prysznice, bidety, toalety)',
    'Montaż listew przypodłogowych',
    'Montaż drzwi wewnętrznych',
    'Montaż balustrady',
    'Urządzenie do czyszczenia podłogi',
    'Układ schodów, stopni, tralek, poręczy',
    'Przygotowanie powierzchni podłogi do układania parkietu, desek parkietowych, laminatu',
    'Wykończenie ścian (tynki dekoracyjne, malowanie, tapetowanie)',
    'Montaż grzejników i konwektorów w otworach drzwiowych i okiennych',
    'Montaż parapetów i wykończenie skarp',
    'Montaż ozdobnych gzymsów i pokryć sufitowych',
    'Płytki podłogowe i ścienne (pomieszczenia mokre, backsplash, pomieszczenia gospodarcze, garaż)',
    'Przygotowanie ścian i podłóg do wykończenia',
    'Urządzenie do poziomowania jastrychu',
    'Zgrubne wyrównanie ścian i sufitów',
  ];
}
