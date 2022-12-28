db.hospital.aggregate( 
    {
      $facet : {
          'Персонал' : [{$unwind: "$lower_personal"}, 
    {$match: {$and : [{'name': 'Больница Колпинского'}, {"lower_personal.speciality": "мед сестра"}]}}, 
    {$project : {_id: 0, "lower_personal":1}}],
          'Количество' : [{$unwind: "$lower_personal"}, 
    {$match: {$and : [{'name': 'Больница Колпинского'}, {"lower_personal.speciality": "мед сестра"}]}}, 
    {$group : { _id: null, count: {$sum:1} } }, 
    {$project : {_id: 0, "count":1}} ]
      }
      
    }
    )
