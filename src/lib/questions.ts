export type TQuestion = {
    question_key: string;
    question_title: string;
}

export type TCategory = {
    category_key: string;
    category_title: string;
    category_description: string;
    category_icon: string;
    questions: TQuestion[];
}

export const data: TCategory[] = [
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
                question_key: "first_moments_3",
                question_title: "Jakie emocje towarzyszyły Wam w drodze ze szpitala do domu?",
            },
            {
                question_key: "first_moments_4",
                question_title: "Czy pamiętasz pierwsze spojrzenie lub uśmiech dziecka?",
            },
            {
                question_key: "first_moments_5",
                question_title: "Kto był pierwszą osobą, która odwiedziła Was po narodzinach?",
            },
        ]
    },
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
                question_key: "birth_2",
                question_title: "Jaka była waga i wzrost dziecka w dniu narodzin?",
            },
            {
                question_key: "birth_3",
                question_title: "Jak wyglądał przebieg porodu z Twojej perspektywy?",
            },
            {
                question_key: "birth_4",
                question_title: "Jaka myśl pojawiła się w Twojej głowie jako pierwsza po narodzinach?",
            },
            {
                question_key: "birth_5",
                question_title: "Co było dla Ciebie najtrudniejsze, a co najpiękniejsze w tym dniu?",
            },
        ]
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
            {
                question_key: "first_days_together_4",
                question_title: "Jaki rytuał z tamtych dni pamiętasz najlepiej?",
            },
            {
                question_key: "first_days_together_5",
                question_title: "Co w tamtym czasie sprawiało Ci największą radość?",
            },
        ]
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
                question_key: "first_smiles_and_reactions_3",
                question_title: "Jak wyglądała Wasza ulubiona zabawa w tym okresie?",
            },
            {
                question_key: "first_smiles_and_reactions_4",
                question_title: "Czy pamiętasz pierwszy wybuch śmiechu?",
            },
            {
                question_key: "first_smiles_and_reactions_5",
                question_title: "Co najczęściej uspokajało dziecko w trudniejszych chwilach?",
            },
        ]
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
            {
                question_key: "development_and_routine_4",
                question_title: "Jak dziecko najchętniej zasypiało?",
            },
            {
                question_key: "development_and_routine_5",
                question_title: "Jaki był Wasz ulubiony wspólny moment dnia?",
            },
        ]
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
                question_key: "first_words_and_steps_2",
                question_title: "Jak dziecko reagowało, gdy próbowało coś powiedzieć?",
            },
            {
                question_key: "first_words_and_steps_3",
                question_title: "Jak wyglądała chwila pierwszego samodzielnego kroku?",
            },
            {
                question_key: "first_words_and_steps_4",
                question_title: "Kto był obok, kiedy wydarzyło się „to po raz pierwszy”?",
            },
            {
                question_key: "first_words_and_steps_5",
                question_title: "Co najbardziej Cię rozczuliło w tym etapie?",
            }
        ]
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
            {
                question_key: "health_and_visits_4",
                question_title: "Co pomagało Wam, gdy dziecko było przeziębione lub marudne?",
            },
            {
                question_key: "health_and_visits_5",
                question_title: "Jakie postępy lub dobre wiadomości szczególnie Cię ucieszyły?",
            },
        ]
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
                question_key: "food_2",
                question_title: "Jaka była jego ulubiona przekąska w dzieciństwie?",
            },
            {
                question_key: "food_3",
                question_title: "Czy pamiętasz zabawną sytuację związaną z jedzeniem?",
            },
            {
                question_key: "food_4",
                question_title: "Jak reagowało na nowe smaki?",
            },
            {
                question_key: "food_5",
                question_title: "Czy macie wspólne potrawy, które zawsze kojarzą się z dzieciństwem?",
            },
        ]
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
                question_key: "family_2",
                question_title: "Czy pamiętasz pierwsze spotkanie dziecka z rodzeństwem lub kuzynami?",
            },
            {
                question_key: "family_3",
                question_title: "Jakie tradycje rodzinne chcieliście przekazać dziecku?",
            },
            {
                question_key: "family_4",
                question_title: "Kto najczęściej pomagał Wam w pierwszych miesiącach?",
            },
            {
                question_key: "family_5",
                question_title: "Czy masz ulubione zdjęcie rodzinne z tamtych dni?",
            },
        ]
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
                question_key: "relationships_and_bonds_3",
                question_title: "Jakie wspólne aktywności najbardziej Was łączyły?",
            },
            {
                question_key: "relationships_and_bonds_4",
                question_title: "Czy pamiętasz moment, kiedy poczułeś: „jesteśmy drużyną”?",
            },
            {
                question_key: "relationships_and_bonds_5",
                question_title: "Jak zmieniała się Wasza relacja z czasem?",
            },
        ]
    },
    {
        category_key: "important_people",
        category_title: "Ważni ludzie w życiu dziecka",
        category_description: "Osoby, które miały znaczenie: opiekunowie, chrzestni, nauczyciele, przyjaciele.",
        category_icon: "/important_people.svg",
        questions: [
            {
                question_key: "important_people_1",
                question_title: "Kto był dla dziecka szczególnie ważny na początku?",
            },
            {
                question_key: "important_people_2",
                question_title: "Czy była osoba, która szczególnie Was wspierała w trudniejszych momentach?",
            },
            {
                question_key: "important_people_3",
                question_title: "Jak dziecko reagowało na spotkania z bliskimi?",
            },
            {
                question_key: "important_people_4",
                question_title: "Kogo dziecko wspomina lub lubi najbardziej i dlaczego?",
            },
            {
                question_key: "important_people_5",
                question_title: "Czy jest ktoś, komu chciałbyś szczególnie podziękować po latach?",
            },
        ]
    },
    {
        category_key: "trips",
        category_title: "Pierwsze podróże",
        category_description: "Wasze pierwsze wspólne wyjazdy i emocje związane z odkrywaniem nowych miejsc.",
        category_icon: "/trips.svg",
        questions: [
            {
                question_key: "trips_1",
                question_title: "Dokąd wybraliście się w pierwszą podróż z dzieckiem?",
            },
            {
                question_key: "trips_2",
                question_title: "Jak wyglądały przygotowania do pierwszego wyjazdu?",
            },
            {
                question_key: "trips_3",
                question_title: "Czy pamiętasz, jak dziecko zareagowało na nowe miejsce?",
            },
            {
                question_key: "trips_4",
                question_title: "Jakie wspomnienia najbardziej zapadły Ci w pamięć z tego wyjazdu?",
            },
            {
                question_key: "trips_5",
                question_title: "Czy macie zdjęcia z tej pierwszej podróży?",
            },
        ]
    },
    {
        category_key: "favorite_places",
        category_title: "Ulubione miejsca",
        category_description: "Dom, plac zabaw, wakacje - miejsca, do których wraca się w myślach najczęściej.",
        category_icon: "/favorite_places.svg",
        questions: [
            {
                question_key: "favorite_places_1",
                question_title: "Jakie miejsce dziecko lubiło najbardziej i dlaczego?",
            },
            {
                question_key: "favorite_places_2",
                question_title: "Gdzie spędzaliście najwięcej czasu na spacerach?",
            },
            {
                question_key: "favorite_places_3",
                question_title: "Czy jest miejsce, które szczególnie kojarzy Ci się z dzieciństwem dziecka?",
            },
            {
                question_key: "favorite_places_4",
                question_title: "Jakie było Wasze ulubione miejsce na rodzinny odpoczynek?",
            },
            {
                question_key: "favorite_places_5",
                question_title: "Czy macie zdjęcie, które najlepiej oddaje klimat tego miejsca?",
            },
        ]
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
                question_key: "play_and_interests_2",
                question_title: "Jakie książeczki lub bajki lubiliście najbardziej?",
            },
            {
                question_key: "play_and_interests_3",
                question_title: "Co sprawiało, że dziecko mogło bawić się bez końca?",
            },
            {
                question_key: "play_and_interests_4",
                question_title: "Kiedy pojawiła się pierwsza większa pasja lub zainteresowanie?",
            },
            {
                question_key: "play_and_interests_5",
                question_title: "Jakie wspólne zabawy wspominasz najcieplej?",
            },
        ]
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
                question_key: "holidays_2",
                question_title: "Jakie prezenty otrzymało na swoje pierwsze urodziny?",
            },
            {
                question_key: "holidays_3",
                question_title: "Czy pamiętasz dekoracje lub atmosferę tamtych chwil?",
            },
            {
                question_key: "holidays_4",
                question_title: "Kto był obecny podczas pierwszych urodzin?",
            },
            {
                question_key: "holidays_5",
                question_title: "Czy macie jakieś wyjątkowe zdjęcia lub nagrania z tych momentów?",
            },
        ]
    },
    {
        category_key: "family_celebrations",
        category_title: "Uroczystości rodzinne",
        category_description: "Ważne spotkania i rodzinne okazje, które budują wspólną historię.",
        category_icon: "/family_celebrations.svg",
        questions: [
            {
                question_key: "family_celebrations_1",
                question_title: "Jaką uroczystość wspominasz jako szczególnie ważną dla Waszej rodziny?",
            },
            {
                question_key: "family_celebrations_2",
                question_title: "Kto zawsze był obecny przy ważnych okazjach?",
            },
            {
                question_key: "family_celebrations_3",
                question_title: "Czy macie tradycję, która powtarza się przy każdej uroczystości?",
            },
            {
                question_key: "family_celebrations_4",
                question_title: "Jaki prezent lub gest wzruszył Cię najbardziej?",
            },
            {
                question_key: "family_celebrations_5",
                question_title: "Czy jest zdjęcie, które najlepiej oddaje klimat tych spotkań?",
            },
        ]
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
                question_key: "small_big_milestones_3",
                question_title: "Jak wyglądał pierwszy dzień w żłobku lub u opiekunki?",
            },
            {
                question_key: "small_big_milestones_4",
                question_title: "Co było największym zaskoczeniem w tym etapie?",
            },
            {
                question_key: "small_big_milestones_5",
                question_title: "Jakie zdanie lub scena z tego czasu wywołuje uśmiech do dziś?",
            },
        ]
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
                question_key: "kindergarten_first_days_3",
                question_title: "Jakie zajęcia dziecko polubiło najszybciej?",
            },
            {
                question_key: "kindergarten_first_days_4",
                question_title: "Czy pojawił się pierwszy „przedszkolny przyjaciel”?",
            },
            {
                question_key: "kindergarten_first_days_5",
                question_title: "Co z tego etapu wspominasz najcieplej?",
            },
        ]
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
                question_key: "school_2",
                question_title: "Jakie przedmioty lub zajęcia polubiło najbardziej?",
            },
            {
                question_key: "school_3",
                question_title: "Kto stał się ważny w szkolnym świecie (nauczyciel, kolega)?",
            },
            {
                question_key: "school_4",
                question_title: "Jaki szkolny moment był dla Was szczególnie dumny lub wzruszający?",
            },
            {
                question_key: "school_5",
                question_title: "Co zmieniło się w Waszej codzienności po rozpoczęciu szkoły?",
            },
        ]
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
                question_key: "achievements_and_challenges_3",
                question_title: "Co najbardziej motywuje Twoje dziecko do działania?",
            },
            {
                question_key: "achievements_and_challenges_4",
                question_title: "Jakie słowa wsparcia pamiętasz z ważnej rozmowy?",
            },
            {
                question_key: "achievements_and_challenges_5",
                question_title: "Jakie zmiany zauważyłaś/zauważyłeś w dziecku na przestrzeni lat?",
            },
        ]
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
            {
                question_key: "child_emotions_4",
                question_title: "Jakie sytuacje były dla niego najtrudniejsze?",
            },
            {
                question_key: "child_emotions_5",
                question_title: "Czego nauczyły Was emocje dziecka w tym etapie?",
            },
        ]
    },
    {
        category_key: "quotes_and_sayings",
        category_title: "Cytaty i powiedzonka",
        category_description: "Zabawne teksty i złote myśli, które warto zachować na później.",
        category_icon: "/quotes_and_sayings.svg",
        questions: [
            {
                question_key: "quotes_and_sayings_1",
                question_title: "Jakie powiedzonko dziecka rozbawia Was do dziś?",
            },
            {
                question_key: "quotes_and_sayings_2",
                question_title: "Czy pamiętasz zabawne przekręcenie słowa lub zdania?",
            },
            {
                question_key: "quotes_and_sayings_3",
                question_title: "Jakie pytanie dziecka najbardziej Cię zaskoczyło?",
            },
            {
                question_key: "quotes_and_sayings_4",
                question_title: "Jaka „złota myśl” dziecka zasługuje na zapisanie?",
            },
            {
                question_key: "quotes_and_sayings_5",
                question_title: "Które zdanie z dzieciństwa chcesz zachować na zawsze?",
            },
        ]
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
                question_key: "letters_from_parents_2",
                question_title: "Za co jesteś najbardziej wdzięczny/wdzięczna w Waszej relacji?",
            },
            {
                question_key: "letters_from_parents_3",
                question_title: "Jaką jedną rzecz chcesz, żeby dziecko o Tobie wiedziało?",
            },
            {
                question_key: "letters_from_parents_4",
                question_title: "Jakie wartości chcesz przekazać dziecku na przyszłość?",
            },
            {
                question_key: "letters_from_parents_5",
                question_title: "Jaki moment z Waszego życia chcesz zapamiętać najmocniej?",
            },
        ]
    },
    {
        category_key: "dreams_and_plans",
        category_title: "Marzenia i plany",
        category_description: "Małe i duże marzenia - zapisane, by kiedyś do nich wrócić.",
        category_icon: "/dreams_and_plans.svg",
        questions: [
            {
                question_key: "dreams_and_plans_1",
                question_title: "Jakie marzenie dziecka najbardziej Cię wzrusza lub bawi?",
            },
            {
                question_key: "dreams_and_plans_2",
                question_title: "Co chciałbyś, aby dziecko spróbowało w najbliższych latach?",
            },
            {
                question_key: "dreams_and_plans_3",
                question_title: "Jakie miejsce chcielibyście razem odwiedzić w przyszłości?",
            },
            {
                question_key: "dreams_and_plans_4",
                question_title: "Jaką umiejętność dziecko chce opanować najbardziej?",
            },
            {
                question_key: "dreams_and_plans_5",
                question_title: "Co chciałbyś zapamiętać o tym etapie za 10 lat?",
            },
        ]
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
                question_key: "what_we_want_to_remember_3",
                question_title: "Jaki dźwięk, zapach lub miejsce kojarzy Ci się z tym czasem?",
            },
            {
                question_key: "what_we_want_to_remember_4",
                question_title: "Co chcesz zachować w pamięci, nawet jeśli czas szybko mija?",
            },
            {
                question_key: "what_we_want_to_remember_5",
                question_title: "Jakie trzy słowa najlepiej opisują ten etap Waszego życia?",
            },
        ]
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
                question_key: "message_for_adulthood_3",
                question_title: "Za co chcesz dziecku podziękować już dziś?",
            },
            {
                question_key: "message_for_adulthood_4",
                question_title: "Co chcesz, aby dziecko wiedziało o Waszej miłości i wsparciu?",
            },
            {
                question_key: "message_for_adulthood_5",
                question_title: "Jakie życzenie chciałbyś mu przekazać na dalsze życie?",
            },
        ]
    },
]