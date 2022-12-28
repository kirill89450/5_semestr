


id_hospital = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];
id_corpus = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];
id_department = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
                new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
                new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
                new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
                new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
                new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];
id_ward = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];
id_doctor = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
             new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];
id_personal = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
               new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
               new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
               new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
               new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
               new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
               new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
               new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
               new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(),
               new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];
id_polyclinic = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];
id_patient = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];
id_laboratory = [new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId(), new ObjectId()];


db.hospital.insertMany(
[   

	{
        
        
            _id : id_hospital[0],
            "name" : "Больница Колпинского",
            "corpus" :
            [
                {
                _id : id_corpus[0],
                "name" : "К1",
                "department" : [
                                 { 
                                     _id : id_department[0],
                                     "name" : 'Отделение неврологии',
                                     "num_wards" : 2,
                                     "wards" :
                                     [
                                              {
                                                 _id : id_ward[0],
                                                 "name" : "W1",
                                                 "num_doss" : 10
                                              },
 
                                              {
                                                 _id : id_ward[1],
                                                 "name" : "W2",
                                                 "num_doss" : 10
                                              }                                             
                                     ]

                                 }

                              ]
                },
                {
                _id : id_corpus[1],
                "name" : "K2",
                "department":[
                                { 
                                     _id : id_department[1],
                                    "name" : 'Отделение хирургии',
                                    "num_wards" : 2,
                                    "wards" :
                                    [
                                             {
                                                _id : id_ward[2],
                                                "name" : "W3",
                                                "num_doss" : 5
                                             },

                                             {
                                                _id : id_ward[3],
                                                "name" : "W4",
                                                "num_doss" : 5
                                             }                                             
                                    ]
                                 },

                                 { 
                                    _id : id_department[2],
                                   "name" : 'Отделение терапевтическое ',
                                   "num_wards" : 2,
                                   "wards" :
                                   [
                                            {
                                               _id : id_ward[4],
                                               "name" : "W5",
                                               "num_doss" : 10
                                            },

                                            {
                                               _id : id_ward[5],
                                               "name" : "W6",
                                               "num_doss" : 10
                                            }                                             
                                   ]
                                }

                            ]
                }
            ],
            "doctors" : [
                            {
                                _id : id_doctor[0],
                                "first_name" : "Максим",
                                "last_name" : "Кондратов",
                                "speciality" : "хирург",
                                "num_operation" : 30,
                                "len_work" : 10,
                                "degree" : "доктор наук",
                                "rang" : "профессор"
                            },
                            {
                                _id : id_doctor[1],
                                "first_name" : "Артем",
                                "last_name" : "Денисов",
                                "speciality" : "хирург",
                                "num_operation" : 12,
                                "len_work" : 3,
                                "degree" : "доктор наук",
                                "rang" : "профессор"
                            },
                            {
                                _id : id_doctor[2],
                                "first_name" : "Василий",
                                "last_name" : "Шнур",
                                "speciality" : "хирург",
                                "num_operation" : 0,
                                "len_work" : 1,
                                "degree" : "кандидат наук",
                                "rang" : "профессор"
                            },
                            {
                                _id : id_doctor[3],
                                "first_name" : "Оксана",
                                "last_name" : "Люля",
                                "speciality" : "стоматолог",
                                "num_operation" : 100,
                                "len_work" : 15,
                                "degree" : "доктор наук",
                                "rang" : "доцент"
                            },
                            {
                                _id : id_doctor[4],
                                "first_name" : "Денис",
                                "last_name" : "Бдешников",
                                "speciality" : "хирург",
                                "num_operation" : 6,
                                "len_work" : 4,
                                "degree" : "доктор наук",
                                "rang" : "доцент"
                            },
                            {
                                _id : id_doctor[25],
                                "first_name" : "Владимир",
                                "last_name" : "Владимировчик",
                                "speciality" : "хирург",
                                "num_operation" : 0,
                                "len_work" : 2,
                                "degree" : "доктор наук",
                                "rang" : "профессор"
                            }

                       ],
                "lower_personal" : 
                [

                        {
                            _id : id_personal[0],
                            "first_name" : "Люба",
                            "last_name" : "Михайловна",
                            "speciality" : "мед сестра"
                        },
                        {
                            _id : id_personal[1],
                            "first_name" : "Артем",
                            "last_name" : "Артемевич",
                            "speciality" : "уборщик"
                        },
                        {
                            _id : id_personal[2],
                            "first_name" : "Иван",
                            "last_name" : "Петрович",
                            "speciality" : "санитар"
                        },
                        {
                            _id : id_personal[3],
                            "first_name" : "Денис",
                            "last_name" : "Денисович",
                            "speciality" : "Санитар"
                        },
                        {
                            _id : id_personal[4],
                            "first_name" : "Людвик",
                            "last_name" : "Людович",
                            "speciality" : "уборщик"
                        },
                        {
                            _id : id_personal[46],
                            "first_name" : "Оксана",
                            "last_name" : "Оксановна",
                            "speciality" : "мед сестра"
                        }                      


                ]
             
            

        
    },

{
    
        _id : id_hospital[1],
        "name" : "Больница Путановская",
        "corpus" :
        [
            {
            _id : id_corpus[2],
            "name" : "K1",
            "department" : [
                             { 
                                 _id : id_department[3],
                                 "name" : 'Отделение гинекологии',
                                 "num_wards" : 2,
                                 "wards" :
                                 [
                                          {
                                             _id : id_ward[6],
                                             "name" : "W7",
                                             "num_doss" : 10
                                          },

                                          {
                                             _id : id_ward[7],
                                             "name" : "W8",
                                             "num_doss" : 5
                                          }                                             
                                 ]

                             }

                          ]
            },
            {
            _id : id_corpus[3],
            "name" : "K2",
            "department":[
                            { 
                                 _id : id_department[4],
                                "name" : 'Отделение травмотологии',
                                "num_wards" : 2,
                                "wards" :
                                [
                                         {
                                            _id : id_ward[8],
                                            "name" : "W9",
                                            "num_doss" : 8
                                         },

                                         {
                                            _id : id_ward[9],
                                            "name" : "W19",
                                            "num_doss" : 8
                                         }                                             
                                ]
                             }

                        ]
            }
        ],
        "doctors" : [
                        {
                            _id : id_doctor[5],
                            "first_name" : "Иван",
                            "last_name" : "Ручной",
                            "speciality" : "травмотолог",
                            "len_work" : 12,
                        },
                        {
                            _id : id_doctor[6],
                            "first_name" : "Сергей",
                            "last_name" : "Ножной",
                            "speciality" : "травмотолог",
                            "len_work" : 30,
                        },
                        {
                            _id : id_doctor[7],
                            "first_name" : "Иван",
                            "last_name" : "Боковой",
                            "speciality" : "гинеколог",
                            "len_work" : 40,
                            "degree" : "доктор наук",
                            "rang" : "доцент"
                        },
                        {
                            _id : id_doctor[8],
                            "first_name" : "Елена",
                            "last_name" : "Братвой",
                            "speciality" : "хирург",
                            "num_operation" : 123,
                            "len_work" : 40,
                            "degree" : "доктор наук",
                            "rang" : "проффесор"
                        },
                        {
                            _id : id_doctor[9],
                            "first_name" : "Иван",
                            "last_name" : "Виндовой",
                            "speciality" : "хирург",
                            "num_operation" : 1000,
                            "len_work" : 100,
                            "degree" : "доктор наук",
                            "rang" : "проффесор"
                        }

                   ],
            "lower_personal" : 
            [

                    {
                        _id : id_personal[5],
                        "first_name" : "Оксана",
                        "last_name" : "Уборковна",
                        "speciality" : "уборщик"
                    },
                    {
                        _id : id_personal[6],
                        "first_name" : "Вадим",
                        "last_name" : "Вадинист",
                        "speciality" : "санитар"
                    },
                    {
                        _id : id_personal[7],
                        "first_name" : "Арсений",
                        "last_name" : "Грубой",
                        "speciality" : "санитар"
                    },
                    {
                        _id : id_personal[8],
                        "first_name" : "Оксана",
                        "last_name" : "Сестринская",
                        "speciality" : "мед сестра"
                    },
                    {
                        _id : id_personal[9],
                        "first_name" : "Оксана",
                        "last_name" : "Несестрова",
                        "speciality" : "мед сестра"
                    }                    


            ]
         
        

    
},
{
        
        
   
    "name" : "Больница Грубовой",
    "corpus" :
    [
        {
        _id : id_corpus[4],
        "name" : "K3",
        "department" : [
                         { 
                             _id : id_department[5],
                             "name" : 'Отделение офтольмологии ',
                             "num_wards" : 2,
                             "wards" :
                             [
                                      {
                                         _id : id_ward[10],
                                         "name" : "W11",
                                         "num_doss" : 4
                                      },

                                      {
                                         _id : id_ward[11],
                                         "name" : "W12",
                                         "num_doss" : 4
                                      },

                                      {
                                         _id : id_ward[12],
                                         "name" : "W13",
                                         "num_doss" : 4
                                      }                                                
                             ]

                         }

                      ]
        },
        {
        _id : id_corpus[5],
        "name" : "K4",
        "department":[
                        { 
                             _id : id_department[6],
                            "name" : 'Отделение хирургии',
                            "num_wards" : 2,
                            "wards" :
                            [
                                     {
                                        _id : id_ward[13],
                                        "name" : "W14",
                                        "num_doss" : 10
                                     },

                                     {
                                        _id : id_ward[14],
                                        "name" : "W15",
                                        "num_doss" : 5
                                     }                                             
                            ]
                         },


                    ]
        }
    ],
    "doctors" : [
                    {
                        _id : id_doctor[10],
                        "first_name" : "Роман",
                        "last_name" : "Рогов",
                        "c" : "окулист",
                        "len_work" : 23,
                    },
                    {
                        _id : id_doctor[11],
                        "first_name" : "Роман",
                        "last_name" : "Ногов",
                        "speciality" : "окулист",
                        "len_work" : 10,
                    },
                    {
                        _id : id_doctor[12],
                        "first_name" : "Иван",
                        "last_name" : "Руков",
                        "speciality" : "окулист",
                        "len_work" : 19,
                        "degree" : "доктор наук",
                        "rang" : "проффесор"
                    },
                    {
                        _id : id_doctor[13],
                        "first_name" : "Денис",
                        "last_name" : "Пальцев",
                        "speciality" : "хирург",
                        "num_operation" : 20,
                        "len_work" : 2,
                        "degree" : "кандидат наук",
                        "rang" : "доцент"
                    },
                    {
                        _id : id_doctor[14],
                        "first_name" : "Роман",
                        "last_name" : "Жонов",
                        "speciality" : "хирург",
                        "num_operation" : 40,
                        "len_work" : 20,
                        "degree" : "кандидат наук",
                        "rang" : "доцент"
                    }

               ],
        "lower_personal" : 
        [

                {
                    _id : id_personal[10],
                    "first_name" : "Иван",
                    "last_name" : "Волгов",
                    "speciality" : "санитар"
                },
                {
                    _id : id_personal[11],
                    "first_name" : "Иван",
                    "last_name" : "Нилов",
                    "speciality" : "санитар"
                },
                {
                    _id : id_personal[12],
                    "first_name" : "Алексанрда",
                    "last_name" : "Иванова",
                    "speciality" : "мед сестра"
                },
                {
                    _id : id_personal[13],
                    "first_name" : "Оксана",
                    "last_name" : "Дурова",
                    "speciality" : "мед сестра"
                },
                {
                    _id : id_personal[14],
                    "first_name" : "Данилла",
                    "last_name" : "Поперечная",
                    "speciality" : "уборщик"
                }                    


        ]
     
    


},
{
        
        
    _id : id_hospital[3],
    "name" : "Больница Жукова",
    "corpus" :
    [
        {
        _id : id_corpus[6],
        "name" : "K5",
        "department" : [
                         { 
                             _id : id_department[8],
                             "name" : 'Отделение хирургии',
                             "num_wards" : 2,
                             "wards" :
                             [
                                      {
                                         _id : id_ward[17],
                                         "name" : "K18",
                                         "num_doss" : 10
                                      },

                                      {
                                         _id : id_ward[18],
                                         "name" : "K19",
                                         "num_doss" : 5
                                      }                                             
                             ]

                         }

                      ]
        },
        {
        _id : id_corpus[7],
        "name" : "K6",
        "department":[
                        { 
                             _id : id_department[9],
                            "name" : 'Отделение гинекологии',
                            "num_wards" : 2,
                            "wards" :
                            [
                                     {
                                        _id : id_ward[19],
                                        "name" : "K20",
                                        "num_doss" : 10
                                     },

                                     {
                                        _id : id_ward[20],
                                        "name" : "K21",
                                        "num_doss" : 5
                                     }                                             
                            ]
                         },

                         { 
                            _id : id_department[10],
                           "name" : 'Отделение травмотологии',
                           "num_wards" : 2,
                           "wards" :
                           [
                                    {
                                       _id : id_ward[21],
                                       "name" : "W22",
                                       "num_doss" : 10
                                    },

                                    {
                                       _id : id_ward[22],
                                       "name" : "W23",
                                       "num_doss" : 5
                                    }                                             
                           ]
                        }

                    ]
        }
    ],
    "doctors" : [
                    {
                        _id : id_doctor[15],
                        "first_name" : "Оксана",
                        "last_name" : "Рудова",
                        "speciality" : "гинеколог",
                        "len_work" : 3,
                    },
                    {
                        _id : id_doctor[16],
                        "first_name" : "Артем",
                        "last_name" : "Пудов",
                        "speciality" : "гинеколог",
                        "len_work" : 4,
                        "degree" : "доктор наук",
                        "rang" : "проффесор"
                    },
                    {
                        _id : id_doctor[17],
                        "first_name" : "Оксана",
                        "last_name" : "Сотова",
                        "speciality" : "хирург",
                        "num_operation" : 30,
                        "len_work" : 10,
                        "degree" : "доктор наук",
                        "rang" : "проффесор"
                    },
                    {
                        _id : id_doctor[18],
                        "first_name" : "Оксана",
                        "last_name" : "Васильевна",
                        "speciality" : "хирург",
                        "num_operation" : 30,
                        "len_work" : 6,
                        "degree" : "доктор наук",
                        "rang" : "проффесор"
                    },
                    {
                        _id : id_doctor[19],
                        "first_name" : "Иван",
                        "last_name" : "Жозев",
                        "speciality" : "гинеколог",
                        "len_work" : 7,
                    }

               ],
        "lower_personal" : 
        [

                {
                    _id : id_personal[15],
                    "first_name" : "Денис",
                    "last_name" : "Ружов",
                    "speciality" : "санитар"
                },
                {
                    _id : id_personal[16],
                    "first_name" : "Оксана",
                    "last_name" : "Водова",
                    "speciality" : "мед сестра"
                },
                {
                    _id : id_personal[17],
                    "first_name" : "Владимир",
                    "last_name" : "Продов",
                    "speciality" : "санитар"
                },
                {
                    _id : id_personal[18],
                    "first_name" : "Артем",
                    "last_name" : "Картесов",
                    "speciality" : "уборщик"
                },
                {
                    _id : id_personal[19],
                    "first_name" : "Никита",
                    "last_name" : "Паздерин",
                    "speciality" : "уборщик"
                }                    


        ]
     
    


},
{
        
    _id : id_hospital[4],
    "name" : "Больница Здоровая",
    "corpus" :
    [
        {
        _id : id_corpus[8],
        "name" : "K9",
        "department" : [
                         { 
                             _id : id_department[11],
                             "name" : 'Отделение травмотологии',
                             "num_wards" : 2,
                             "wards" :
                             [
                                      {
                                         _id : id_ward[12],
                                         "name" : "W13",
                                         "num_doss" : 10
                                      },

                                      {
                                         _id : id_ward[13],
                                         "name" : "W14",
                                         "num_doss" : 5
                                      }                                             
                             ]

                         }

                      ]
        },
        {
        _id : id_corpus[9],
        "name" : "K10",
        "department":[
                        { 
                             _id : id_department[12],
                            "name" : 'Отделение хирургии',
                            "num_wards" : 2,
                            "wards" :
                            [
                                     {
                                        _id : id_ward[14],
                                        "name" : "K15",
                                        "num_doss" : 10
                                     },

                                     {
                                        _id : id_ward[15],
                                        "name" : "K16",
                                        "num_doss" : 5
                                     }                                             
                            ]
                         },

                         { 
                            _id : id_department[13],
                           "name" : 'Отделение офтольмологии',
                           "num_wards" : 2,
                           "wards" :
                           [
                                    {
                                       _id : id_ward[16],
                                       "name" : "W17",
                                       "num_doss" : 10
                                    },

                                    {
                                       _id : id_ward[17],
                                       "name" : "W18",
                                       "num_doss" : 5
                                    }                                             
                           ]
                        }

                    ]
        }
    ],
    "doctors" : [
                    {
                        _id : id_doctor[20],
                        "first_name" : "Роман",
                        "last_name" : "Максименко",
                        "speciality" : "офтольмолог",
                        "len_work" : 1,
                    },
                    {
                        _id : id_doctor[21],
                        "first_name" : "Никита",
                        "last_name" : "Паздрин",
                        "speciality" : "хирург",
                        "num_operation" : 45,
                        "len_work" : 5,
                        "degree" : "доктор наук",
                        "rang" : "проффесор"
                    },
                    {
                        _id : id_doctor[22],
                        "first_name" : "Иван",
                        "last_name" : "Дорохов",
                        "speciality" : "травмотолог",
                        "len_work" : 9,
                    },
                    {
                        _id : id_doctor[23],
                        "first_name" : "Кирилл",
                        "last_name" : "Шевелев",
                        "speciality" : "хирург",
                        "num_operation" : 200,
                        "len_work" : 10,
                        "degree" : "доктор наук",
                        "rang" : "проффесор"
                    },
                    {
                        _id : id_doctor[24],
                        "name" : "София",
                        "last_name" : "Кривоносова",
                        "speciality" : "гинеколог",
                        "len_work" : 11,
                    }

               ],
        "lower_personal" : 
        [

                {
                    _id : id_personal[20],
                    "first_name" : "Сергей",
                    "last_name" : "Голубов",
                    "speciality" : "санитар"
                },
                {
                    _id : id_personal[21],
                    "first_name" : "Артем",
                    "last_name" : "Краснов",
                    "speciality" : "уборщик"
                },
                {
                    _id : id_personal[22],
                    "first_name" : "Анастасия",
                    "last_name" : "Кротова",
                    "speciality" : "мед сестра"
                },
                {
                    _id : id_personal[23],
                    "first_name" : "Карина",
                    "last_name" : "Файрушина",
                    "speciality" : "мед сестра"
                },
                {
                    _id : id_personal[24],
                    "first_name" : "Максим",
                    "last_name" : "Голубев",
                    "speciality" : "санитар"
                }                    


        ]
     
    

    
}

]);

db.polyclinic.insertMany([
{

    _id : id_polyclinic[0],
    "name" : "Поликлиника №1",
    "num_cabinet" : 3,
    "doctors" : [
        {
            _id : id_doctor[0], // работает и в больнице, и в поликлинике
            "first_name" : "Максим",
            "last_name" : "Кондратов",
            "speciality" : "хирург",
        },
        {
            _id : id_doctor[1], // работает и в больнице, и в поликлинике
            "first_name" : "Артем",
            "last_name" : "Денисов",
            "speciality" : "хирург",
        },
        {
            _id : id_doctor[2],// работает и в больнице, и в поликлинике
            "first_name" : "Василий",
            "last_name" : "Шнур",
            "speciality" : "хирург",
        },
        {
            _id : id_doctor[3],// работает и в больнице, и в поликлинике
            "first_name" : "Оксана",
            "last_name" : "Люля",
            "speciality" : "стоматолог",
        },
        {
            _id : id_doctor[4], // работает и в больнице, и в поликлинике
            "first_name" : "Денис",
            "last_name" : "Бдешников",
            "speciality" : "хирург",
        }

   ],
"lower_personal" : 
[

    {
        _id : id_personal[25],
        "first_name" : "Никита",
        "last_name" : "Ночной",
        "speciality" : "уборщик"
    },
    {
        _id : id_personal[26],
        "first_name" : "Артем",
        "last_name" : "Раданов",
        "speciality" : "санитар"
    },
    {
        _id : id_personal[27],
        "first_name" : "Оксана",
        "last_name" : "Дуркова",
        "speciality" : "мед сестра"
    },
    {
        _id : id_personal[28],
        "first_name" : "Наталья",
        "last_name" : "Плавкова",
        "speciality" : "мед сестра"
    },
    {
        _id : id_personal[29],
        "first_name" : "Максим",
        "last_name" : "Галкин",
        "speciality" : "уборщик"
    },
    
    
],
"pacient" :
[
    {
        _id : id_patient[0],
        "first_name" : "Сергей",
        "last_name" : "Воронов",
        "father_name" : "Максимов",
        "diagnoz" : "спинная грыжа",
        "medical_doctor" : id_doctor[0] 
    }
]

},
{

    _id : id_polyclinic[1],
    "name" : "Поликлиника №2",
    "num_cabinet" : 5,
    "doctors" : [
        {
            _id : id_doctor[25], 
            "first_name" : "Владимир",
            "last_name" : "Владимировчик",
            "speciality" : "хирург",
        },
        {
            _id : id_doctor[26], 
            "first_name" : "Василий",
            "last_name" : "Попутин",
            "speciality" : "офтольмолог",
        },
        {
            _id : id_doctor[27],
            "first_name" : "Оксана",
            "last_name" : "Воровая",
            "speciality" : "Гинеколог",
        },
        {
            _id : id_doctor[28],
            "first_name" : "Иосиф",
            "last_name" : "Сталин",
            "speciality" : "офтольмолог",
        },
        {
            _id : id_doctor[29], 
            "first_name" : "Арсен",
            "last_name" : "Арменов",
            "speciality" : "стоматолог",
        }

   ],
"lower_personal" : 
[

    {
        _id : id_personal[30],
        "first_name" : "Денис",
        "last_name" : "Видеокартов",
        "speciality" : "санитар"
    },
    {
        _id : id_personal[31],
        "first_name" : "Максим",
        "last_name" : "Оперативнов",
        "speciality" : "санитар"
    },
    {
        _id : id_personal[32],
        "first_name" : "Роберт",
        "last_name" : "Процессоров",
        "speciality" : "уборщик"
    },
    {
        _id : id_personal[33],
        "first_name" : "Мария",
        "last_name" : "Куллеров",
        "speciality" : "мед сестра"
    },
    {
        _id : id_personal[34],
        "first_name" : "Анна",
        "last_name" : "Материнов",
        "speciality" : "мед сестра"
    },
    
    
],
"pacient" :
[
    {
        _id : id_patient[1],
        "first_name" : "Роман",
        "last_name" : "Давидков",
        "father_name" : "Артемевич",
        "diagnoz" : "боль в шейном позвонке",
        "medical_doctor" : id_doctor[21] 
    }
]

},
{

    _id : id_polyclinic[2],
    "name" : "Поликлиника №3",
    "num_cabinet" : 1,
    "doctors" : [
        {
            _id : id_doctor[30], 
            "first_name" : "Арсен",
            "last_name" : "Динамиков",
            "speciality" : "хирург",
        },
        {
            _id : id_doctor[31], 
            "first_name" : "Максим",
            "last_name" : "Мониторов",
            "speciality" : "офтольмолог",
        },
        {
            _id : id_doctor[32],
            "first_name" : "Роман",
            "last_name" : "Геймпадов",
            "speciality" : "гинеколог",
        },
        {
            _id : id_doctor[33],
            "first_name" : "Кирилл",
            "last_name" : "Клавиатуров",
            "speciality" : "педиатр",
        },
        {
            _id : id_doctor[34], 
            "first_name" : "София",
            "last_name" : "Вебкамовна",
            "speciality" : "терапевт",
        }

   ],
"lower_personal" : 
[

    {
        _id : id_personal[35],
        "first_name" : "Максим",
        "last_name" : "Жижович",
        "speciality" : "уборщик"
    },
    {
        _id : id_personal[36],
        "first_name" : "Рубен",
        "last_name" : "Нарукавников",
        "speciality" : "санитар"
    },
    {
        _id : id_personal[37],
        "first_name" : "Артем",
        "last_name" : "Проводов",
        "speciality" : "санитар"
    },
    {
        _id : id_personal[38],
        "first_name" : "Екатерина",
        "last_name" : "Сайтовна",
        "speciality" : "мед сестра"
    },
    {
        _id : id_personal[39],
        "first_name" : "Анастасия",
        "last_name" : "Друговна",
        "speciality" : "мед сестра"
    },
    
    
],
"pacient" :
[
    {
        _id : id_patient[2],
        "first_name" : "Алексей",
        "last_name" : "Кучерин",
        "father_name" : "Максимович",
        "diagnoz" : "спидарак",
        "medical_doctor" : id_doctor[24] 
    }
]

},
{

    _id : id_polyclinic[3],
    "num_cabinet" : 10,
    "name" : "Поликлиника №4",
    "doctors" : [
        {
            _id : id_doctor[35], 
            "first_name" : "Алексей",
            "last_name" : "Пупов",
            "speciality" : "офтольмолог",
        },
        {
            _id : id_doctor[36], 
            "first_name" : "Марат",
            "last_name" : "Айбатулин",
            "speciality" : "хирург",
        },
        {
            _id : id_doctor[37],
            "first_name" : "Максим",
            "last_name" : "Пупов",
            "speciality" : "хирург",
        },
        {
            _id : id_doctor[38],
            "first_name" : "Оксана",
            "last_name" : "Пальцовна",
            "speciality" : "терапевт",
        },
        {
            _id : id_doctor[39],
            "first_name" : "Мария",
            "last_name" : "Логовна",
            "speciality" : "хирург",
            "num_operation" : 3
        }

   ],
"lower_personal" : 
[

    {
        _id : id_personal[40],
        "first_name" : "Полина",
        "last_name" : "Папич",
        "speciality" : "мед сестра"
    },
    {
        _id : id_personal[41],
        "first_name" : "Арсен",
        "last_name" : "Гудов",
        "speciality" : "уборщик"
    },
    {
        _id : id_personal[42],
        "first_name" : "Василий",
        "last_name" : "Драгов",
        "speciality" : "санитар"
    },
    {
        _id : id_personal[43],
        "first_name" : "Максим",
        "last_name" : "Дустов",
        "speciality" : "уборщик"
    },
    {
        _id : id_personal[44],
        "first_name" : "Мария",
        "last_name" : "Грусть",
        "speciality" : "мед сестра"
    },
    
    
],
"pacient" :
[
    {
        _id : id_patient[3],
        "first_name" : "Я",
        "last_name" : "Устал",
        "father_name" : "Заполнять",
        "diagnoz" : "нет ноги",
        "medical_doctor" : id_doctor[30] 
    }
]

},
{

    _id : id_polyclinic[4],
    "name" : "Поликлиника №5",
    "num_cabinet" : 15,
    "doctors" : [
        {
            _id : id_doctor[40], 
            "first_name" : "Рубен",
            "last_name" : "Факалов",
            "speciality" : "стоматолог",
            "num_operation" : 500
        },
        {
            _id : id_doctor[41], 
            "first_name" : "Павел",
            "last_name" : "Ровкович",
            "speciality" : "хирург",
        },
        {
            _id : id_doctor[42],
            "first_name" : "Эмиль",
            "last_name" : "Джарахов",
            "speciality" : "окулист",
        },
        {
            _id : id_doctor[43],
            "first_name" : "Артем",
            "last_name" : "Артестов",
            "speciality" : "гинеколов",
        },
        {
            _id : id_doctor[44],
            "first_name" : "Максим",
            "last_name" : "Гробов",
            "speciality" : "терапевт",
        }

   ],
"lower_personal" : 
[

    {
        _id : id_personal[45],
        "first_name" : "Мария",
        "last_name" : "Робанова",
        "speciality" : "мед сестра"
    },
    {
        _id : id_personal[4],
        "first_name" : "Анна",
        "last_name" : "Швайн",
        "speciality" : "мед сестра"
    },
    {
        _id : id_personal[47],
        "first_name" : "Максим",
        "last_name" : "Геральдыч",
        "speciality" : "санитар"
    },
    {
        _id : id_personal[48],
        "first_name" : "Рубен",
        "last_name" : "Клааков",
        "speciality" : "санитар"
    },
    {
        _id : id_personal[49],
        "first_name" : "Артем",
        "last_name" : "Продстав",
        "speciality" : "уборщик"
    },
    
    
],
"pacient" :
[
    {
        _id : id_patient[4],
        "first_name" : "Роман",
        "last_name" : "Гастов",
        "father_name" : "Ибрагимович",
        "diagnoz" : "вытек глах",
        "medical_doctor" : id_doctor[35] 
    }
]

}
]);
db.laboratoria.insertMany([

    {
        _id : id_laboratory[0],
        "name" : "Лаборатория №1",
        "profil_name" : ["биохимическое", "физиологическое"],
        "dogovor_s" : [id_hospital[0], id_hospital[1]]
    },
    {
        _id : id_laboratory[1],
        "name" : "Лаборатория №2",
        "profil_name" : ["биохимическое", "химическое"],
        "dogovor_s" : [id_hospital[3]]
    },
    {
        _id : id_laboratory[2],
        "name" : "Лаборатория №3",
        "profil_name" : ["физиологическое"],
        "dogovor_s" : [id_hospital[4]]
    },
    {
        _id : id_laboratory[3],
        "name" : "Лаборатория №4",
        "profil_name" : ["химическое", "физиологическое"],
        "dogovor_s" : []
    },
    {
        _id : id_laboratory[4],
        "name" : "Лаборатория №5",
        "profil_name" : ["биохимическое"],
        "dogovor_s" : []
    }



]);