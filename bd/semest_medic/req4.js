db.hospital.aggregate( 
    {
      $facet : {
          "Доктора" : [{$unwind: "$doctors"}, 
    {$match: {$and : [{'name': 'Больница Грубовой'}, {"doctors.speciality": "окулист"}, 
    {'doctors.degree' : "доктор наук"}, {"doctors.rang" : "проффесор"}]}}, 
    {$project : {_id: 0, "doctors":1}}],
          "Количество" : [{$unwind: "$doctors"}, 
    {$match: {$and : [{'name': 'Больница Грубовой'}, {"doctors.speciality": "окулист"},
    {'doctors.degree' : "доктор наук"}, {"doctors.rang" : "проффесор"}]}}, 
    {$group : { _id: null, count: {$sum:1} } }, 
    {$project : {_id: 0, "count":1}} ]
      }
      
    }
    )
    