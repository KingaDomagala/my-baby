export type TQuestion = {
  question_key: string;
  question_title: string;
};

export type TCategory = {
  category_key: string;
  category_title: string;
  category_description: string;
  category_icon: string;
  questions: TQuestion[];
};

export const data: TCategory[] = [
  {
    category_key: "birth",
    category_title: "Narodziny",
    category_description: "Najważniejsze szczegóły i wspomnienia z dnia, w którym wszystko się zmieniło.",
    category_icon: "/birth.svg",
    questions: [
      {
        question_key: "birth_1",
        question_title: "Kiedy i gdzie urodziło się Twoje dziecko? (data, godzina, miejsce)",
      },
      {
        question_key: "birth_3",
        question_title: "Jak wyglądał przebieg porodu z Twojej perspektywy?",
      },
      {
        question_key: "birth_5",
        question_title: "Co było dla Ciebie najtrudniejsze, a co najpiękniejsze w tym dniu?",
      },
    ],
  },
  {
    category_key: "first_moments",
    category_title: "Pierwsze chwile",
    category_description: "Zapisz pierwsze spojrzenia, emocje i momenty, które rozpoczęły Waszą wspólną historię.",
    category_icon: "/first_moments.svg",
    questions: [
      {
        question_key: "first_moments_1",
        question_title: "Jak wyglądała chwila, kiedy po raz pierwszy zobaczyłeś swoje dziecko?",
      },
      {
        question_key: "first_moments_2",
        question_title: "Co czułeś, gdy trzymałeś je na rękach po raz pierwszy?",
      },
      {
        question_key: "first_moments_4",
        question_title: "Czy pamiętasz pierwsze spojrzenie lub uśmiech dziecka?",
      },
    ],
  },
  {
    category_key: "first_days_together",
    category_title: "Pierwsze dni razem",
    category_description: "Pierwsze noce, rytm dnia i drobne chwile, które budowały bliskość.",
    category_icon: "/first_days_together.svg",
    questions: [
      {
        question_key: "first_days_together_1",
        question_title: "Jak wspominasz pierwszy dzień po powrocie do domu?",
      },
      {
        question_key: "first_days_together_2",
        question_title: "Co najbardziej zapamiętałeś z pierwszej nocy?",
      },
      {
        question_key: "first_days_together_3",
        question_title: "Jakie wsparcie było wtedy dla Ciebie najważniejsze?",
      },
    ],
  },
  {
    category_key: "development_and_routine",
    category_title: "Rozwój i codzienność",
    category_description: "Sen, karmienie, rytuały - codzienność, która z czasem staje się najcenniejszym wspomnieniem.",
    category_icon: "/development_and_routine.svg",
    questions: [
      {
        question_key: "development_and_routine_1",
        question_title: "Jak wyglądał typowy dzień Waszej rodziny w tym czasie?",
      },
      {
        question_key: "development_and_routine_2",
        question_title: "Jaki rytuał dnia lub wieczoru pamiętasz najlepiej?",
      },
      {
        question_key: "development_and_routine_3",
        question_title: "Co pomagało Wam w trudniejszych dniach lub nocach?",
      },
    ],
  },
  {
    category_key: "first_smiles_and_reactions",
    category_title: "Pierwsze uśmiechy i reakcje",
    category_description: "Te małe sygnały były wielką wiadomością: rozpoznaje Cię i jest z Tobą bezpiecznie.",
    category_icon: "/first_smiles_and_reactions.svg",
    questions: [
      {
        question_key: "first_smiles_and_reactions_1",
        question_title: "Kiedy pojawił się pierwszy świadomy uśmiech?",
      },
      {
        question_key: "first_smiles_and_reactions_2",
        question_title: "Na co dziecko reagowało najbardziej (głos, muzyka, uśmiech)?",
      },
      {
        question_key: "first_smiles_and_reactions_5",
        question_title: "Co najczęściej uspokajało dziecko w trudniejszych chwilach?",
      },
    ],
  },
  {
    category_key: "health_and_visits",
    category_title: "Zdrowie i wizyty lekarskie",
    category_description: "Ważne daty, wizyty i kamienie milowe - wszystko, co warto mieć w jednym miejscu.",
    category_icon: "/health_and_visits.svg",
    questions: [
      {
        question_key: "health_and_visits_1",
        question_title: "Jakie ważne badania lub wizyty pamiętasz z tego okresu?",
      },
      {
        question_key: "health_and_visits_2",
        question_title: "Jak dziecko znosiło szczepienia i wizyty u lekarza?",
      },
      {
        question_key: "health_and_visits_3",
        question_title: "Czy był moment, kiedy szczególnie się martwiłeś o zdrowie dziecka?",
      },
    ],
  },
  {
    category_key: "food",
    category_title: "Ulubione smaki",
    category_description: "Pierwsze łyżeczki, ulubione przekąski i zabawne historie z jedzeniem w tle.",
    category_icon: "/food.svg",
    questions: [
      {
        question_key: "food_1",
        question_title: "Jakie było pierwsze danie, którego spróbowało Twoje dziecko?",
      },
      {
        question_key: "food_4",
        question_title: "Jak reagowało na nowe smaki?",
      },
      {
        question_key: "food_3",
        question_title: "Czy pamiętasz zabawną sytuację związaną z jedzeniem?",
      },
    ],
  },
  {
    category_key: "family",
    category_title: "Nasza rodzina i bliscy",
    category_description: "Ludzie, którzy byli obok od początku - ich reakcje, wsparcie i wspólne chwile.",
    category_icon: "/family.svg",
    questions: [
      {
        question_key: "family_1",
        question_title: "Jak zareagowali dziadkowie, gdy dowiedzieli się o narodzinach?",
      },
      {
        question_key: "family_4",
        question_title: "Kto najczęściej pomagał Wam w pierwszych miesiącach?",
      },
      {
        question_key: "family_3",
        question_title: "Jakie tradycje rodzinne chcieliście przekazać dziecku?",
      },
    ],
  },
  {
    category_key: "relationships_and_bonds",
    category_title: "Relacje i więzi",
    category_description: "Bliskość budowana każdego dnia - relacje, które kształtują dzieciństwo.",
    category_icon: "/relationships_and_bonds.svg",
    questions: [
      {
        question_key: "relationships_and_bonds_1",
        question_title: "Co najbardziej pomagało Wam budować poczucie bliskości?",
      },
      {
        question_key: "relationships_and_bonds_2",
        question_title: "Jak dziecko okazywało przywiązanie i zaufanie?",
      },
      {
        question_key: "relationships_and_bonds_4",
        question_title: "Czy pamiętasz moment, kiedy poczułeś: „jesteśmy drużyną”?",
      },
    ],
  },
  {
    category_key: "play_and_interests",
    category_title: "Zabawa i zainteresowania",
    category_description: "Ulubione zabawki, książki, pasje i to, co najbardziej wciągało dziecko.",
    category_icon: "/play_and_interests.svg",
    questions: [
      {
        question_key: "play_and_interests_1",
        question_title: "Jaka zabawka była absolutnym numerem jeden?",
      },
      {
        question_key: "play_and_interests_3",
        question_title: "Co sprawiało, że dziecko mogło bawić się bez końca?",
      },
      {
        question_key: "play_and_interests_4",
        question_title: "Kiedy pojawiła się pierwsza większa pasja lub zainteresowanie?",
      },
    ],
  },
  {
    category_key: "first_words_and_steps",
    category_title: "Pierwsze słowa i kroki",
    category_description: "Pierwsze dźwięki, słowa i kroki - małe kroki ku wielkim zmianom.",
    category_icon: "/first_words_and_steps.svg",
    questions: [
      {
        question_key: "first_words_and_steps_1",
        question_title: "Jakie było pierwsze słowo, które zapamiętałeś najmocniej?",
      },
      {
        question_key: "first_words_and_steps_3",
        question_title: "Jak wyglądała chwila pierwszego samodzielnego kroku?",
      },
      {
        question_key: "first_words_and_steps_5",
        question_title: "Co najbardziej Cię rozczuliło w tym etapie?",
      },
    ],
  },
  {
    category_key: "holidays",
    category_title: "Pierwsze święta i urodziny",
    category_description: "Pierwsze wspólne święta, urodziny i domowe tradycje, które zostały z Wami na dłużej.",
    category_icon: "/holidays.svg",
    questions: [
      {
        question_key: "holidays_1",
        question_title: "Jak wyglądały pierwsze święta z dzieckiem?",
      },
      {
        question_key: "holidays_4",
        question_title: "Kto był obecny podczas pierwszych urodzin?",
      },
      {
        question_key: "holidays_3",
        question_title: "Czy pamiętasz dekoracje lub atmosferę tamtych chwil?",
      },
    ],
  },
  {
    category_key: "small_big_milestones",
    category_title: "Małe wielkie wydarzenia",
    category_description: "Pierwsze razy i przełomowe chwile, które zostają w sercu na długo.",
    category_icon: "/small_big_milestones.svg",
    questions: [
      {
        question_key: "small_big_milestones_1",
        question_title: "Jaki „pierwszy raz” wspominasz najczęściej?",
      },
      {
        question_key: "small_big_milestones_2",
        question_title: "Kiedy poczuliście, że dziecko naprawdę szybko rośnie?",
      },
      {
        question_key: "small_big_milestones_5",
        question_title: "Jakie zdanie lub scena z tego czasu wywołuje uśmiech do dziś?",
      },
    ],
  },
  {
    category_key: "kindergarten_first_days",
    category_title: "Pierwsze dni w przedszkolu",
    category_description: "Nowe miejsce, nowe emocje - adaptacja i pierwsze doświadczenia w przedszkolu.",
    category_icon: "/kindergarten_first_days.svg",
    questions: [
      {
        question_key: "kindergarten_first_days_1",
        question_title: "Jak wyglądał pierwszy dzień w przedszkolu?",
      },
      {
        question_key: "kindergarten_first_days_2",
        question_title: "Co było najtrudniejsze w adaptacji, a co pomogło najbardziej?",
      },
      {
        question_key: "kindergarten_first_days_4",
        question_title: "Czy pojawił się pierwszy „przedszkolny przyjaciel”?",
      },
    ],
  },
  {
    category_key: "school",
    category_title: "Szkoła",
    category_description: "Pierwsze lekcje, nowe wyzwania, przyjaźnie i codzienność szkolna.",
    category_icon: "/school.svg",
    questions: [
      {
        question_key: "school_1",
        question_title: "Jak wyglądał pierwszy dzień w szkole?",
      },
      {
        question_key: "school_3",
        question_title: "Kto stał się ważny w szkolnym świecie (nauczyciel, kolega)?",
      },
      {
        question_key: "school_4",
        question_title: "Jaki szkolny moment był dla Was szczególnie dumny lub wzruszający?",
      },
    ],
  },
  {
    category_key: "achievements_and_challenges",
    category_title: "Osiągnięcia i wyzwania",
    category_description: "Sukcesy, trudniejsze dni i ważne rozmowy - wszystko, co buduje charakter.",
    category_icon: "/achievements_and_challenges.svg",
    questions: [
      {
        question_key: "achievements_and_challenges_1",
        question_title: "Z jakiego osiągnięcia dziecka jesteś szczególnie dumna/dumny?",
      },
      {
        question_key: "achievements_and_challenges_2",
        question_title: "Jakie wyzwanie było najtrudniejsze i jak sobie z nim poradziliście?",
      },
      {
        question_key: "achievements_and_challenges_5",
        question_title: "Jakie zmiany zauważyłaś/zauważyłeś w dziecku na przestrzeni lat?",
      },
    ],
  },
  {
    category_key: "child_emotions",
    category_title: "Emocje dziecka",
    category_description: "Radości, smutki i lęki - uczucia, które warto zauważyć i zapamiętać.",
    category_icon: "/child_emotions.svg",
    questions: [
      {
        question_key: "child_emotions_1",
        question_title: "Co najczęściej wywoływało radość u Twojego dziecka?",
      },
      {
        question_key: "child_emotions_2",
        question_title: "Jak dziecko reagowało, gdy było smutne lub przestraszone?",
      },
      {
        question_key: "child_emotions_3",
        question_title: "Co pomagało mu się uspokoić i poczuć bezpiecznie?",
      },
    ],
  },
  {
    category_key: "letters_from_parents",
    category_title: "Listy od rodziców",
    category_description: "Kilka słów od serca - listy, do których można wrócić po latach.",
    category_icon: "/letters_from_parents.svg",
    questions: [
      {
        question_key: "letters_from_parents_1",
        question_title: "Co chciałbyś powiedzieć dziecku dziś, na tym etapie życia?",
      },
      {
        question_key: "letters_from_parents_4",
        question_title: "Jakie wartości chcesz przekazać dziecku na przyszłość?",
      },
      {
        question_key: "letters_from_parents_5",
        question_title: "Jaki moment z Waszego życia chcesz zapamiętać najmocniej?",
      },
    ],
  },
  {
    category_key: "dreams_and_plans",
    category_title: "Marzenia i plany",
    category_description: "Małe i duże marzenia - zapisane, by kiedyś do nich wrócić.",
    category_icon: "/dreams_and_plans.svg",
    questions: [
      {
        question_key: "dreams_and_plans_2",
        question_title: "Co chciałbyś, aby dziecko spróbowało w najbliższych latach?",
      },
      {
        question_key: "dreams_and_plans_3",
        question_title: "Jakie miejsce chcielibyście razem odwiedzić w przyszłości?",
      },
      {
        question_key: "dreams_and_plans_5",
        question_title: "Co chciałbyś zapamiętać o tym etapie za 10 lat?",
      },
    ],
  },
  {
    category_key: "what_we_want_to_remember",
    category_title: "Co chcielibyśmy zapamiętać",
    category_description: "Najważniejsze drobiazgi i momenty, które tworzą prawdziwą historię.",
    category_icon: "/what_we_want_to_remember.svg",
    questions: [
      {
        question_key: "what_we_want_to_remember_1",
        question_title: "Jaki drobny moment z codzienności był dla Ciebie najważniejszy?",
      },
      {
        question_key: "what_we_want_to_remember_2",
        question_title: "Co najbardziej kochasz w tym etapie życia dziecka?",
      },
      {
        question_key: "what_we_want_to_remember_5",
        question_title: "Jakie trzy słowa najlepiej opisują ten etap Waszego życia?",
      },
    ],
  },
  {
    category_key: "message_for_adulthood",
    category_title: "Wiadomość na dorosłość",
    category_description: "Słowa, które mogą stać się najpiękniejszym prezentem w przyszłości.",
    category_icon: "/message_for_adulthood.svg",
    questions: [
      {
        question_key: "message_for_adulthood_1",
        question_title: "Co chciałbyś, aby dorosłe dziecko o sobie pamiętało?",
      },
      {
        question_key: "message_for_adulthood_2",
        question_title: "Jaką jedną radę chcesz mu zostawić na przyszłość?",
      },
      {
        question_key: "message_for_adulthood_4",
        question_title: "Co chcesz, aby dziecko wiedziało o Waszej miłości i wsparciu?",
      },
    ],
  },
];