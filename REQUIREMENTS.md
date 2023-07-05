npm i# API Requirements

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.
**_Table of Contents_**

- [API and Database Requirements](#api-and-database-requirements)
  - [API Endpoints](#api-endpoints)
    - [Users](#users)
    - [Bumps](#Bumps)
    - [streetSpeed](#streetSpeed)
  - [Data Schema](#data-schema)
    - [Users Schema](#Users-schema)
    - [Bumps Schema](#Bumps-schema)
    - [streetSpeed Schema](#streetSpeed-schema)
  - [Data Shapes](#data-shapes)
    - [User](#user)
    - [Bump](#bump)
    - [Speed](#speed)

## API Endpoints

#### Users

- show

  - HTTP verb `GET`
  - Endpoint:- `/Users/all`
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `users objects`

    ```json
    {
    "data": [
        {
            "_id": "640f669ea62f0859057aeb61",
            "first_name": "Reem",
            "last_name": "Sakr",
            "email": "test20@gmail.com",
            "password": "$2b$10$D1egPL5uoWs5YVvXKLtGxe/Tl96Uil5dBpjKU5YDPDrpTJ3/vQ2t2",
            "__v": 0,
            "emergencyState": true,
            "location": {
                "type": "Point",
                "coordinates": [
                    31.003928,
                    30.5624965
                ]
            },
            "nearestCarDist": 200,
            "nearestHelpDist": 200
        },
        {
            "_id": "6414d676014b90e1085b6a69",
            "first_name": "Rashida",
            "last_name": "Mohamed",
            "email": "RAMO.21122019@gmail.com",
            "password": "$2b$10$bxTg49AzB4Bt4NFtFnAmsucGQt3obJYYYSqKi41At5YAaj4vVk07q",
            "__v": 0,
            "emergencyState": false,
            "location": {
                "type": "Point",
                "coordinates": [
                    31.0035639,
                    30.562383
                ]
            },
            "nearestHelpDist": 10000,
            "nearestCarDist": 5000
        },
        {
            "_id": "6415a5a0c4bb7d845f51a71c",
            "first_name": "Reem",
            "last_name": "Sakr",
            "email": "test30@gmail.com",
            "password": "$2b$10$TxcFRalMj/pdcoQm5G4Xg.Z7Erf4vaVGf02BjYRVnoqr88H390oW2",
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "__v": 0
        },
        {
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "_id": "6415ad1cef6a150cb6dbecf3",
            "first_name": "Ramo",
            "last_name": "Mohamed",
            "email": "1192001rrrrr@gmail.com",
            "password": "$2b$10$LH2fY6GGkgmP/ondGAIoUOb5F./KWxPemGY6tDniY7yFU1lGdxjkG",
            "__v": 0
        },
        {
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "_id": "6415ad31ef6a150cb6dbed04",
            "first_name": "Ramo",
            "last_name": "Mohamed",
            "email": "Ramo@gmail.com",
            "password": "$2b$10$Ea7To0m8uGKiRu3dDCtsTOGOpGSIS6pGFauePZ32OpfwiGwktKXTe",
            "__v": 0
        },
        {
            "_id": "641621c417a11b15a386085a",
            "first_name": "Reem",
            "last_name": "Sakr",
            "email": "test40@gmail.com",
            "password": "$2b$10$BCjItflo9ULzsvAE4dyGUuG06sL273RWDEod/7F/P4/z0Qo/IE542",
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "__v": 0,
            "emergencyState": true,
            "location": {
                "type": "Point",
                "coordinates": [
                    31.00398,
                    30.562465
                ]
            }
        },
        {
            "_id": "64185704db1aaea1e85e66c9",
            "first_name": "Shrouk",
            "last_name": "Gamal",
            "email": "shrouk@gmail.com",
            "password": "$2b$10$KIr6ohVdbM2ZJKuI4JX3vubbHdQXmEQ9bHpsRoLRkp9639x1G2Y1y",
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "__v": 0,
            "emergencyState": false,
            "location": {
                "type": "Point",
                "coordinates": [
                    31.090340872488284,
                    30.547320149371856
                ]
            }
        },
        {
            "_id": "643db9a6f8d5853ceca40b17",
            "first_name": "Shrouk",
            "last_name": "Gamal",
            "email": "gamalshrouk752@gmail.com",
            "password": "$2b$10$KLlT9xGlxL29zi0i7hT8.uE8uVeNzUcr1tKLi1/e/Jz5YKgLKAqa6",
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "__v": 0,
            "emergencyState": false,
            "location": {
                "type": "Point",
                "coordinates": [
                    -1,
                    -1
                ]
            }
        },
        {
            "_id": "644fdd0a21c728964f6a54d8",
            "first_name": "test",
            "last_name": "test1",
            "email": "test@gmail.com",
            "password": "$2b$10$SixO72NnO58NYUi6Mo2Nae4iG1dK7/1.Jt62bzhDDxXmYlxjnE7E6",
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "__v": 0,
            "emergencyState": false,
            "location": {
                "type": "Point",
                "coordinates": [
                    31.0035834,
                    30.5624091
                ]
            }
        },
        {
            "_id": "644fdd8e21c728964f6a54ee",
            "first_name": "test1",
            "last_name": "test2",
            "email": "test1@gmail.com",
            "password": "$2b$10$bN6LDfGrTECFmUoVfZHN1ei1OuzrF0HcJtGC6z/vCxg8UANQ0uucy",
            "nearestCarDist": 3000,
            "nearestHelpDist": 10000,
            "__v": 0,
            "emergencyState": false,
            "location": {
                "type": "Point",
                "coordinates": [
                    31.0035584,
                    30.562376
                ]
            }
        },
        {
            "_id": "64611286f8ef43fbc74a7a63",
            "first_name": "Rashida",
            "last_name": "Mohamed",
            "email": "Ra@gmail.com",
            "password": "$2b$10$QgKzNcSPtreN1SX8SZUCA.ZP.ePlak7w9ub6hN4uhDhXIAiyFiWX6",
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "__v": 0,
            "emergencyState": false,
            "location": {
                "type": "Point",
                "coordinates": [
                    31.11263567314243,
                    30.54724
                ]
            }
        },
        {
            "_id": "647255f49943abb9d3518420",
            "first_name": "test5",
            "last_name": "test",
            "email": "test5@gmail.com",
            "password": "$2b$10$MfPBoyHYuWi3bu21xEhuwuzCLZMsr7j2g0UygVUDxyoQFS/Q2tquC",
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "__v": 0,
            "emergencyState": false,
            "location": {
                "type": "Point",
                "coordinates": [
                    31.00467,
                    30.55804
                ]
            }
        },
        {
            "_id": "64727863734d9802aac43c46",
            "first_name": "test6",
            "last_name": "test",
            "email": "test6@gmail.com",
            "password": "$2b$10$L0.OSwjSovz.YahrCGvASumZQa.ePMPlreJ3d.defFqlfzhnQOvly",
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "__v": 0,
            "emergencyState": false,
            "location": {
                "type": "Point",
                "coordinates": [
                    31.0035944,
                    30.5623697
                ]
            }
        },
        {
            "_id": "649e15313b4f51cd55ee77c8",
            "first_name": "Car1",
            "last_name": "blue",
            "email": "check1@gmail.com",
            "password": "$2b$10$TnKRPY4M.1gNu5grlZFQ3O9h6ZIVtv0rXwOXdaBQyPkVOJE7Svtly",
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "__v": 0,
            "emergencyState": false,
            "location": {
                "type": "Point",
                "coordinates": [
                    30.720745494809186,
                    30.837678632204735
                ]
            }
        },
        {
            "_id": "649e18ba3b4f51cd55ee77fa",
            "first_name": "Car2",
            "last_name": "second",
            "email": "Check2@gmail.com",
            "password": "$2b$10$ExyVuQUH8SdDa8VkVWf41OKKZ5zSPO4nuCvAfxRJ//6puZsyR17cC",
            "nearestCarDist": 300,
            "nearestHelpDist": 10000,
            "__v": 0,
            "emergencyState": false,
            "location": {
                "type": "Point",
                "coordinates": [
                    31.8145811,
                    31.5061457
                ]
            }
        },
        {
            "_id": "64a4aa85758846bdb90420cf",
            "first_name": "Reem",
            "last_name": "Sakr",
            "email": "reem@gmail.com",
            "password": "$2b$10$.bOvJqRd9d4uj3v9Eey/8OwpRLOG6r7Qk5FeDAKd7jf66FKjzVoV2",
            "nearestCarDist": 300,
            "nearestHelpDist": 200,
            "__v": 0,
            "emergencyState": true,
            "location": {
                "type": "Point",
                "coordinates": [
                    31.00398,
                    30.562465
                ]
            }
        }
    ]
    }
    ```



- Delete All

  - HTTP verb `DELETE`
  - Endpoint:- `/Users/`
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `success object`

    ```json
    {
    "data": "success"
    }
    ```

- Sign-up

  - HTTP verb `POST`
  - Endpoint:- `/Users/signup`
  - Request Body

    ```json
    {
      "first_name": "Reem",
      "last_name": "Sakr",
      "email": "reem@gmail.com",
      "password": "123"
    }
    ```

  - Response Body -- `user object`

    ```json
    {
      "data": {
        "first_name": "Reem",
        "last_name": "Sakr",
        "email": "reem@gmail.com",
        "password": "$2b$10$.bOvJqRd9d4uj3v9Eey/8OwpRLOG6r7Qk5FeDAKd7jf66FKjzVoV2",
        "nearestCarDist": 300,
        "nearestHelpDist": 10000,
        "_id": "64a4aa85758846bdb90420cf",
        "__v": 0
      }
    }
    ```

- login

  - HTTP verb `POST`
  - Endpoint:- `/Users/login`
  - Request Body

    ```json
    {
      "email": "reem@gmail.com",
      "password": "123"
    }
    ```

  - Response Body -- `user token`

    ```json
    {
      "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTRhYTg1NzU4ODQ2YmRiOTA0MjBjZiIsImlhdCI6MTY4ODUxMzI2MywiZXhwIjoxNjg4NTk5NjYzfQ.vyR_Aea3yeoHtuQi5klEb7Um3KZk_Say3nKn10c1lTw"
      }
    }
    ```

- Update location **`token required`**

  - HTTP verb `PUT`
  - Endpoint:- `/Users`
  - Request Body

    ```json
    {
      "location": {
        "type": "Point",
        "coordinates": [31.00398, 30.562465]
      },
      "emergencyState": 1
    }
    ```

  - Response Body -- `Array of users`

    ```json
    [
      {
        "_id": "641621c417a11b15a386085a",
        "first_name": "Reem",
        "last_name": "Sakr",
        "email": "test40@gmail.com",
        "nearestCarDist": 300,
        "nearestHelpDist": 10000,
        "__v": 0,
        "emergencyState": true,
        "location": {
          "type": "Point",
          "coordinates": [31.00398, 30.562465]
        },
        "dist": {
          "calculated": 0
        }
      },
      {
        "_id": "64a4aa85758846bdb90420cf",
        "first_name": "Reem",
        "last_name": "Sakr",
        "email": "reem@gmail.com",
        "nearestCarDist": 300,
        "nearestHelpDist": 10000,
        "__v": 0,
        "emergencyState": true,
        "location": {
          "type": "Point",
          "coordinates": [31.00398, 30.562465]
        },
        "dist": {
          "calculated": 0
        }
      },
      {
        "_id": "640f669ea62f0859057aeb61",
        "first_name": "Reem",
        "last_name": "Sakr",
        "email": "test20@gmail.com",
        "__v": 0,
        "emergencyState": true,
        "location": {
          "type": "Point",
          "coordinates": [31.003928, 30.5624965]
        },
        "nearestCarDist": 200,
        "nearestHelpDist": 200,
        "dist": {
          "calculated": 6.094269159455471
        }
      },
      {
        "_id": "64727863734d9802aac43c46",
        "first_name": "test6",
        "last_name": "test",
        "email": "test6@gmail.com",
        "nearestCarDist": 300,
        "nearestHelpDist": 10000,
        "__v": 0,
        "emergencyState": false,
        "location": {
          "type": "Point",
          "coordinates": [31.0035944, 30.5623697]
        },
        "dist": {
          "calculated": 38.453619747222746
        }
      },
      {
        "_id": "644fdd0a21c728964f6a54d8",
        "first_name": "test",
        "last_name": "test1",
        "email": "test@gmail.com",
        "nearestCarDist": 300,
        "nearestHelpDist": 10000,
        "__v": 0,
        "emergencyState": false,
        "location": {
          "type": "Point",
          "coordinates": [31.0035834, 30.5624091]
        },
        "dist": {
          "calculated": 38.521598897916796
        }
      },
      {
        "_id": "6414d676014b90e1085b6a69",
        "first_name": "Rashida",
        "last_name": "Mohamed",
        "email": "RAMO.21122019@gmail.com",
        "__v": 0,
        "emergencyState": false,
        "location": {
          "type": "Point",
          "coordinates": [31.0035639, 30.562383]
        },
        "nearestHelpDist": 10000,
        "nearestCarDist": 5000,
        "dist": {
          "calculated": 40.916043414829005
        }
      },
      {
        "_id": "644fdd8e21c728964f6a54ee",
        "first_name": "test1",
        "last_name": "test2",
        "email": "test1@gmail.com",
        "nearestCarDist": 3000,
        "nearestHelpDist": 10000,
        "__v": 0,
        "emergencyState": false,
        "location": {
          "type": "Point",
          "coordinates": [31.0035584, 30.562376]
        },
        "dist": {
          "calculated": 41.60874970607735
        }
      }
    ]
    ```

- update Distance **`token required`**

  - HTTP verb `PUT`
  - Endpoint:- `/Users/Dist`
  - Request Body

    ```json
    {
      "nearestHelpDist": 200
    }
    ```

  - Response Body -- `Updated User object`

    ```json
    {
      "data": "success"
    }
    ```

#### Bumps

- Get All 

  - HTTP verb `GET`
  - Endpoint:- `/Bump/all`
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `objects of Bumps`

    ```json
    {
    "data": [
        {
            "_id": "640e623f0beecf6e9f120332",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.094362853204988,
                    30.547350396191554
                ]
            },
            "feedbackCounter": -3,
            "__v": 0
        },
        {
            "_id": "6416220f17a11b15a3860865",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.00398,
                    30.562465
                ]
            },
            "feedbackCounter": -5,
            "__v": 0
        },
        {
            "_id": "64162f8619f05c703386d91b",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.0036738,
                    30.5624817
                ]
            },
            "feedbackCounter": -2,
            "__v": 0
        },
        {
            "_id": "641756a20fab60ae920da009",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.00398,
                    30.562465
                ]
            },
            "feedbackCounter": -2,
            "__v": 0
        },
        {
            "_id": "64178295270cfae0a383805b",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.0033664,
                    30.5625305
                ]
            },
            "feedbackCounter": -3,
            "__v": 0
        },
        {
            "_id": "643f46b5e63ac47149358df5",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.0035487,
                    30.5624416
                ]
            },
            "feedbackCounter": 1,
            "__v": 0
        },
        {
            "_id": "643f46d0e63ac47149358e3e",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.0035508,
                    30.5624412
                ]
            },
            "feedbackCounter": 0,
            "__v": 0
        },
        {
            "_id": "643f47f0e63ac47149358ea2",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.0035546,
                    30.5624445
                ]
            },
            "feedbackCounter": 1,
            "__v": 0
        },
        {
            "_id": "644e700d5ce13c86574ef8c4",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.115441571351667,
                    30.547225474252045
                ]
            },
            "feedbackCounter": -3,
            "__v": 0
        },
        {
            "_id": "644fddfd21c728964f6a556f",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.106566113802003,
                    30.547308631224336
                ]
            },
            "feedbackCounter": -1,
            "__v": 0
        },
        {
            "_id": "6484ae3ff1fbe750f5049cdb",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.000991369675567,
                    30.576187715686988
                ]
            },
            "feedbackCounter": -1,
            "__v": 0
        },
        {
            "_id": "6484aebcf1fbe750f5049d16",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.00091,
                    30.574611207345832
                ]
            },
            "feedbackCounter": -1,
            "__v": 0
        },
        {
            "_id": "6484afd2f1fbe750f5049d9b",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.00088285630827,
                    30.57345431075184
                ]
            },
            "feedbackCounter": 1,
            "__v": 0
        },
        {
            "_id": "649e04ca12ee44bb6e5ef2a7",
            "location": {
                "type": "Point",
                "coordinates": [
                    30.745402111435755,
                    30.818597294657476
                ]
            },
            "feedbackCounter": -3,
            "__v": 0
        },
        {
            "_id": "649e21703b4f51cd55ee7c31",
            "location": {
                "type": "Point",
                "coordinates": [
                    30.739934177607886,
                    30.822796280039324
                ]
            },
            "feedbackCounter": 1,
            "__v": 0
        },
        {
            "_id": "649e266c3b4f51cd55ee8199",
            "location": {
                "type": "Point",
                "coordinates": [
                    30.74065978480151,
                    30.822239065176287
                ]
            },
            "feedbackCounter": 1,
            "__v": 0
        },
        {
            "_id": "64a0b7de42676cdfce972ffb",
            "location": {
                "type": "Point",
                "coordinates": [
                    30.737568548918993,
                    30.82461291509678
                ]
            },
            "feedbackCounter": 1,
            "__v": 0
        },
        {
            "_id": "64a4ae3a758846bdb90420dc",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.00398,
                    30.562465
                ]
            },
            "feedbackCounter": 1,
            "__v": 0
        }
    ]
    }
    ```

- create **`token required`**

  - HTTP verb `POST`
  - Endpoint:- `/Bump/add`
  - Request Body

    ```json
    {
      "location": {
        "type": "Point",
        "coordinates": [31.00398, 30.562465]
      }
    }
    ```

  - Response Body -- `object of Bumps`

    ```json
    {
      "data": {
        "location": {
          "type": "Point",
          "coordinates": [31.00398, 30.562465]
        },
        "feedbackCounter": 1,
        "_id": "64a4ae3a758846bdb90420dc",
        "__v": 0
      }
    }
    ```

- Check Bumps

  - HTTP verb `POST`
  - Endpoint:- `/Bump/checkBumps`
  - Request Body

    ```json
    {
      "location": {
        "type": "Point",
        "coordinates": [31.003923, 30.5624975]
      }
    }
    ```

  - Response Body -- `Array of bumps`

    ```json
    [
      {
        "_id": "6416220f17a11b15a3860865",
        "location": {
          "type": "Point",
          "coordinates": [31.00398, 30.562465]
        },
        "feedbackCounter": -5,
        "__v": 0,
        "dist": {
          "calculated": 6.552910810222884
        }
      },
      {
        "_id": "641756a20fab60ae920da009",
        "location": {
          "type": "Point",
          "coordinates": [31.00398, 30.562465]
        },
        "feedbackCounter": -2,
        "__v": 0,
        "dist": {
          "calculated": 6.552910810222884
        }
      },
      {
        "_id": "64a4ae3a758846bdb90420dc",
        "location": {
          "type": "Point",
          "coordinates": [31.00398, 30.562465]
        },
        "feedbackCounter": 1,
        "__v": 0,
        "dist": {
          "calculated": 6.552910810222884
        }
      },
      {
        "_id": "64162f8619f05c703386d91b",
        "location": {
          "type": "Point",
          "coordinates": [31.0036738, 30.5624817]
        },
        "feedbackCounter": -2,
        "__v": 0,
        "dist": {
          "calculated": 23.951454392687936
        }
      },
      {
        "_id": "643f47f0e63ac47149358ea2",
        "location": {
          "type": "Point",
          "coordinates": [31.0035546, 30.5624445]
        },
        "feedbackCounter": 1,
        "__v": 0,
        "dist": {
          "calculated": 35.80205289943567
        }
      },
      {
        "_id": "643f46d0e63ac47149358e3e",
        "location": {
          "type": "Point",
          "coordinates": [31.0035508, 30.5624412]
        },
        "feedbackCounter": 0,
        "__v": 0,
        "dist": {
          "calculated": 36.223116750539106
        }
      },
      {
        "_id": "643f46b5e63ac47149358df5",
        "location": {
          "type": "Point",
          "coordinates": [31.0035487, 30.5624416]
        },
        "feedbackCounter": 1,
        "__v": 0,
        "dist": {
          "calculated": 36.413755053565616
        }
      },
      {
        "_id": "64178295270cfae0a383805b",
        "location": {
          "type": "Point",
          "coordinates": [31.0033664, 30.5625305]
        },
        "feedbackCounter": -3,
        "__v": 0,
        "dist": {
          "calculated": 53.47857840685929
        }
      },
      {
        "_id": "6484afd2f1fbe750f5049d9b",
        "location": {
          "type": "Point",
          "coordinates": [31.00088285630827, 30.57345431075184]
        },
        "feedbackCounter": 1,
        "__v": 0,
        "dist": {
          "calculated": 1254.0242648129056
        }
      },
      {
        "_id": "6484aebcf1fbe750f5049d16",
        "location": {
          "type": "Point",
          "coordinates": [31.00091, 30.574611207345832]
        },
        "feedbackCounter": -1,
        "__v": 0,
        "dist": {
          "calculated": 1379.0606766485328
        }
      },
      {
        "_id": "6484ae3ff1fbe750f5049cdb",
        "location": {
          "type": "Point",
          "coordinates": [31.000991369675567, 30.576187715686988]
        },
        "feedbackCounter": -1,
        "__v": 0,
        "dist": {
          "calculated": 1549.666550045599
        }
      },
      {
        "_id": "640e623f0beecf6e9f120332",
        "location": {
          "type": "Point",
          "coordinates": [31.094362853204988, 30.547350396191554]
        },
        "feedbackCounter": -3,
        "__v": 0,
        "dist": {
          "calculated": 8832.134579953306
        }
      },
      {
        "_id": "644fddfd21c728964f6a556f",
        "location": {
          "type": "Point",
          "coordinates": [31.106566113802003, 30.547308631224336]
        },
        "feedbackCounter": -1,
        "__v": 0,
        "dist": {
          "calculated": 9983.72619533476
        }
      }
    ]
    ```

- Update feedback **`token required`**

  - HTTP verb `PUT`
  - Endpoint:- `/Bump`
  - Request Body

    ```json
    {
    "bumpId":"640e623f0beecf6e9f120332",
    "flag":"true"
    }
    ```

  - Response Body -- `sucess data`

    ```json
    {
    "data": "success"
    }
    ```

#### streetSpeed

- Get All

  - HTTP verb `GET`
  - Endpoint:- `/streetSpeed`
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `objects of streetSpeed`

    ```json
    {
    "data": [
        {
            "_id": "63d58803a9b2e930f9a1aa61",
            "streetName": "Cairo Alexandria Desert Road",
            "firstLong": 30.13227,
            "firstLat": 31.00657,
            "lastLong": 31.13898,
            "lastLat": 29.83927,
            "maxSpeed": 120,
            "__v": 0
        },
        {
            "_id": "63de984e22e2487908d8882a",
            "streetName": "ُEl-galala Road",
            "firstLong": 31.48034,
            "firstLat": 29.9626,
            "lastLong": 32.53277,
            "lastLat": 29.10985,
            "maxSpeed": 120,
            "__v": 0
        },
        {
            "_id": "63e12646c35b43c09505dd89",
            "streetName": "Cairo - Suez Rd‏",
            "firstLong": 29.986393,
            "firstLat": 31.2138,
            "lastLong": 30.09354,
            "lastLat": 32.56862,
            "maxSpeed": 120,
            "__v": 0
        },
        {
            "_id": "63e127c9c35b43c09505dd8b",
            "streetName": "Regional Ring Road",
            "firstLong": 30.33457,
            "firstLat": 31.85765,
            "lastLong": 30.32856,
            "lastLat": 31.56005,
            "maxSpeed": 120,
            "__v": 0
        },
        {
            "_id": "63e12870c35b43c09505dd8d",
            "streetName": "Shobra-Benha Highway",
            "firstLong": 30.15716,
            "firstLat": 31.25451,
            "lastLong": 30.47052,
            "lastLat": 31.22374,
            "maxSpeed": 120,
            "__v": 0
        },
        {
            "_id": "63e12942c35b43c09505dd90",
            "streetName": "26th Of July Axis",
            "firstLong": 30.05967,
            "firstLat": 31.19308,
            "lastLong": 30.04947,
            "lastLat": 31.0507,
            "maxSpeed": 90,
            "__v": 0
        },
        {
            "_id": "63e6d461be2a6ca39e195cff",
            "streetName": "ُgalala Road",
            "firstLong": 31.58034,
            "firstLat": 21.9626,
            "lastLong": 31.53277,
            "lastLat": 39.10985,
            "maxSpeed": 120,
            "__v": 0
        }
    ]
    }
    ```


- check speed - **`token required`**

  - HTTP verb `POST`
  - Endpoint:- `/streetSpeed/checkSpeed`
  - Request Body

    ```json
      {
    "long":30.56,
    "lat":29.9626,
    "speed":130
     }
    ```

  - Response Body -- `message`

    ```json
    {
    "data": "this car speed  is max than max speed of this street"
    }
    ```

## Data Schema

### Users Schema

```sql

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
},{ _id : false })

const userSchmea = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'please enter your first name'],
        //unique: true,
        minlength: [3, 'Minium first_name length is 3 letters']
        //validate:[isEmail,'Minium first_name length is 3 letters']
    },
    last_name: {
        type: String,
        required: [true, 'please enter your last name'],
        //unique: true,
        minlength: [3, 'Minium last_name length is 3 letters']
        //validate:[isEmail,'Minium last_name length is 3 letters']
    },
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: true,
        lowcase: true,
        validate: [isEmail, 'Please enter a vaild email']
    },
    password: {
        type: String,
        required: [true, 'please enter an password'],
        minlength: [6, 'Minium password length is 6 characters']
    },
    location: {
        type: pointSchema
        
    },
    emergencyState:{
        type:Boolean
    },
    nearestCarDist:{
        type:Number,
        default:300
    },
    nearestHelpDist:{
        type:Number,
        default:10000
    }
})
```

### Bumps Schema

```sql
const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
},{ _id : false })

const bumpSchmea = new mongoose.Schema({
    
    location: {
        type: pointSchema
        
    },
    feedbackCounter:{
        type:Number,
        default:1
    }
})
```

### streetSpeed Schema

```sql
const streetSchmea = new mongoose.Schema({
    streetName: {
        type: String,
        required: [true],
        unique: true,
        minlength: [3]
    },
    firstLong:{
        type:Number,
        required:[true],
        unique:true
    },
    firstLat:{
        type:Number,
        required:[true],
        unique:true
    },
    lastLong:{
        type:Number,
        required:[true],
        unique:true
    },
    lastLat:{
        type:Number,
        required:[true],
        unique:true
    },
    maxSpeed:{
        type:Number,
        required:[true]
    }
    
})
```



## Data Shapes

#### User

```typescript
type user ={
    first_name:string;
    last_name:string;
    email:string
    password:string;
    location:point;
    emergencyState:Boolean;
    nearestCarDist:Number;
    nearestHelpDist:Number;
}
```

#### Bumps
```typescript
type bump ={
location:PointSchema;
feedbackCounter:Number;
}
```
#### streetSpeed
```typescript
type speed ={
    streetName:String;
    firstLong:Number;
    firstLat:Number;
    lastLong:Number;
    lastLat:Number;
    maxSpeed:Number;
}

