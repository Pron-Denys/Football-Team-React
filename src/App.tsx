import  React from 'react'
import './App.css'
import FootballTeamInfo from './components/FootballTeamInfo';

export class Cup {
  private _title!: string;
  private _photo!: string;
  private _counter!: number;

  constructor(title: string, counter: number, photo: string) {
    this._title = title;
    this._counter = counter;
    this._photo = photo;
  }

  public get title(): string {
    return this._title;
  }

  public get counter(): number {
    return this._counter;
  }

  public get photo(): string {
    return this._photo;
  }
}

export class Player {
  private _fullName!: string;
  private _position!: string;

  constructor(fullName: string, position: string) {
    this._fullName = fullName;
    this._position = position;
  }

  public get fullName(): string {
    return this._fullName;
  }

  public get position(): string {
    return this._position;
  }
}

export class FootballTeam {
  private _name!: string;
  private _country!: string;
  private _city!: string;
  private _dateOfEstablishment!: string;
  private _players!: Player[];
  private _cups!: Cup[];
  private _photo!: string;

  constructor(name: string, country: string, city: string, dateOfEstablishment: string, players: Player[], cups: Cup[],
    photo: string) 
  {
    this._name = name;
    this._country = country;
    this._city = city;
    this._dateOfEstablishment = dateOfEstablishment;
    this._players = players;
    this._cups = cups;
    this._photo = photo;
  }

  public get name(): string {
    return this._name;
  }

  public get country(): string {
    return this._country;
  }

  public get city(): string {
    return this._city;
  }

  public get dateOfEstablishment(): string {
    return this._dateOfEstablishment;
  }

  public get players(): Player[] {
    return this._players;
  }

  public get cups(): Cup[] {
    return this._cups;
  }

  public get photo(): string {
    return this._photo;
  }
}

const footballTeams = {
  teams: [
    new FootballTeam("Парі Сен-Жермен", "Франція", "Париж", "12 серпня 1970 року",
      [new Player("Люка Шевальє", "Воротар"), new Player("Алессандро Лонгоні", "правий захисник"),
        new Player("Маркіньйос", "центральний захисник"), new Player("Ілля Забарний", "центральний захисник"),
        new Player("Ашраф Хакімі", "лівий захисник"), new Player("Нуну Мендеш", "центарльний півзахисник"),
        new Player("Люка Ернандес","центарльний півзахисник"), new Player("Жоау Невеш", "центарльний нападник"),
        new Player("Фабіан Руїс", "лівий вінгер"), new Player("Міка Годтс", "центральний півзахисник"),
        new Player("Магнес Акліуш", "центральний півзахисник")], [new Cup("Ліга чемпіонів УЕФА", 2, "https://st.depositphotos.com/1008709/4499/i/450/depositphotos_44991341-stock-photo-uefa-champions-league.jpg"),
          new Cup("Суперкубок УЄФА", 2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zliLWZ2VuEFC2kh4qRK5kpytj3v2iCgEcMZshpZrZA&s=10"),
          new Cup("Кубок володарів кубків УЄФА", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStD6o0qzPlTV3QsLfQocYk7LKHAs-k8GPvmDadY9j_3Q&s"),
          new Cup("Кубок Інтертото", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLpgvfawz2TSysVnJszPjM1Z8CwpChZHCUgSsE-wh8A&s"),
          new Cup("Міжконтинентальний кубок ФІФА", 1,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9919bXAzCekus9HpMiBHLullRo5zpCmBU9zWqAK8hlQ&s=10")
        ], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQX7XdgVnfgfpKD_QwEHivGuz3VM81APShSoKIobpjQ&s"),
    new FootballTeam("Олімпік (Марсель)", "Франція", "Марсель", "31 серпня 1899 року",
      [new Player("Люка Шевальє", "Воротар"), new Player("Тімоті Веа","Правий захисник"), new Player("Наєф Аґерд", "Центральний захисник"),
        new Player("Сі Джей Іган-Райлі", "Центральний захисник"), new Player("Емерсон Палмієрі", "Лівий захисник"), new Player("П'єр-Еміль Гейб'єрг","Опорний півзахисник"),
        new Player("Жоффрей Кондогбіа", "Опорний півзахисник"), new Player("Ейнджел Гомес","Атакувальний півзахисник"),
        new Player("Амін Харіт", "Правий вінгер"), new Player("Амін Гуїрі", "Центральний нападник"), new Player("Ігор Пайшан", "Лівий вінгер")],
      [new Cup("Ліга чемпіонів УЄФА", 1,"https://st.depositphotos.com/1008709/4499/i/450/depositphotos_44991341-stock-photo-uefa-champions-league.jpg"),
        new Cup("Кубок Інтертото", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLpgvfawz2TSysVnJszPjM1Z8CwpChZHCUgSsE-wh8A&s"),
        new Cup("Кубок Франції", 10, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBblFB1CK5671mt0TOfVt_sqwNiLqJZn--JU9PHgRdGHFs1mQBItrU1Im&s=10"),
        new Cup("Кубок французької ліги", 3, "https://upload.wikimedia.org/wikipedia/ru/e/e5/Logo_coupe_ligue.png?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original"),
        new Cup("Суперкубок Франції", 3, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrurDVXU6OO11Br7NCosVXV4oJ4nxsMlQnnDRtbSKqQ&s=10")],
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReE9jHgjlMwivMGl3p6C7_Jl868QNAoAmdGzpezMidkQ&s=10"),
    new FootballTeam("Монако", "Монако", "район Фонв'єй", "23 серпня 1924 року",
      [new Player("Лукаш Градецький", "Воротар"), new Player("Вандерсон", "Правий захисник"), new Player("Крістіан Мавісса", "Центральний захисник"),
        new Player("Мохаммед Салісу", "Центральний захисник"), new Player("Флавіу Назінью", "Лівий захисник"), new Player("Деніс Закарія", "Опорний півзахисник"),
        new Player("Ламін Камара", "Центральний півзахисник"), new Player("Олександр Головін", "Атакувальний півзахисник"), new Player("Такумі Мінаміно", "Правий / лівий вінгер"),
        new Player("Ансу Фаті", "Лівий вінгер")],
      [new Cup("Кубок Франції", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBblFB1CK5671mt0TOfVt_sqwNiLqJZn--JU9PHgRdGHFs1mQBItrU1Im&s=10"),
        new Cup("Кубок французької ліги", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBblFB1CK5671mt0TOfVt_sqwNiLqJZn--JU9PHgRdGHFs1mQBItrU1Im&s=10"),
        new Cup("Суперкубок Франції", 4, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrurDVXU6OO11Br7NCosVXV4oJ4nxsMlQnnDRtbSKqQ&s=10")],
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShU--pwY1NW10dWmmT28CFqGXuGQpAwJZ9aMuIL5AH&s=10"),
    new FootballTeam("Олімпік (Ліон)", "Франція", "Ліон", "3 серпня 1950 року", 
      [new Player("Домінік Грейф", "Воротар"), new Player("Закарі Атекаме", "Правий захисник"), new Player("Мусса Ніакате", "Центральний захисник"),
        new Player("Рубен Клюйверт", "Центральний захисник"), new Player("Абнер", "Лівий захисник"), new Player("Тайлер Мортон", "Опорний півзахисник"),
        new Player("Корентен Толіссо", "Центральний півзахисник"), new Player("Павел Шульц", "Атакувальний півзахисник"),
        new Player("Ернест Нуама", "Правий вінгер"), new Player("Лоїс Опенда", "Центральний нападник"), new Player("Кейто Накамура", "Лівий вінгер")],
      [new Cup("Кубок Франції", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBblFB1CK5671mt0TOfVt_sqwNiLqJZn--JU9PHgRdGHFs1mQBItrU1Im&s=10"),
        new Cup("Кубок французької ліги", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBblFB1CK5671mt0TOfVt_sqwNiLqJZn--JU9PHgRdGHFs1mQBItrU1Im&s=10"),
        new Cup("Суперкубок Франції", 8, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrurDVXU6OO11Br7NCosVXV4oJ4nxsMlQnnDRtbSKqQ&s=10"),
        new Cup("Кубок Інтертото", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLpgvfawz2TSysVnJszPjM1Z8CwpChZHCUgSsE-wh8A&s")],
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzOCYBE3Adav_o4g4eAJ5erUEJnS9fIJQBPjhbJvu5w&s=10"),
    new FootballTeam("«Лілль» (ЛОСК)", "Франція", "Лілль", "23 вересня 1944 року", [new Player("Берке Озер", "Воротар"),
      new Player("Тьягу Сантуш", "Правий захисник"), new Player("Натан Нгой", "Центральний захисник"), new Player("Алессандру", "Центральний захисник"),
      new Player("Ромен Перро", "Лівий захисник"), new Player("Нгалаєль Мукау", "Опорний півзахисник"), new Player("Бенжамен Андре", "Опорний півзахисник"),
      new Player("Гакон Арнар Гаральдссон", "Атакувальний півзахисник"), new Player("Ділан Баква", "Правий вінгер"),
      new Player("Олів'є Жіру", "Центральний нападник"), new Player("Осаме Саграуї", "Лівий вінгер")],
    [new Cup("Кубок Франції", 6, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBblFB1CK5671mt0TOfVt_sqwNiLqJZn--JU9PHgRdGHFs1mQBItrU1Im&s=10"),
      new Cup("Суперкубок Франції", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrurDVXU6OO11Br7NCosVXV4oJ4nxsMlQnnDRtbSKqQ&s=10"),
      new Cup("Кубок Інтертото", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLpgvfawz2TSysVnJszPjM1Z8CwpChZHCUgSsE-wh8A&s")],
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiY4pNjhpyqJrJ3OLchYAksoxk0Vd8ULzvpLaVmYaEBg&s=10")
  ]
};

class App extends React.Component {
  render() {
    return (
      <div className="conteiner">
        <FootballTeamInfo data={footballTeams}/>
      </div>
    )
  }
}

export default App
