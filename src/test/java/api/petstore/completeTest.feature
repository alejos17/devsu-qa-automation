#Autor: Alejandro Tamayo
#Fecha: 20/01/2024

Feature: Test Flow API petstore

  Background:
    * configure continueOnStepFailure = true
    * url "https://petstore.swagger.io"
    * header Accept = config.accept
    * header Accept-Encoding = config.accept_enconding
    * header Connection = config.connection
    * def newName = 'Malcom'

  @CrearPet
  Scenario: Añadir una mascota a la tienda
    * path "/v2/pet"
    And request read('classpath:api/petstore/postBody.json')
    When method post
    Then status 200
    * def id = $.id
    * def name = $.name
    * def status = $.status
    Then print 'ID asignado a la mascota: ',id
    Then print 'Nombre de la mascota: ',name
    Then print 'Status asignado a la mascota: ',status
    * karate.write(response, 'result.json')

  @ConsultarPet
  Scenario: Consultar la mascota ingresada previamente
    * def req = read('classpath:api/petstore/postBody.json')
    * def reqName = req.name
    * def reqStatus = req.status
    * def result = read('file:target/result.json')
    * def id = result.id
    Then print 'ID para consulta de la mascota: ',id
    * path "/v2/pet/" + id
    When method get
    Then status 200
    * def name = $.name
    * def status = $.status
    And match reqName == name
    And match reqStatus == status
    Then print 'Response - Nombre de la mascota: ',name
    Then print 'Response - Status asignado a la mascota: ',status

  @ActualizarPet
  Scenario: Actualizar el nombre de la mascota y el status de la mascota a 'sold'
    * def result = read('file:target/result.json')
    * def id = result.id
    Then print 'ID para consulta de la mascota: ',id
    * path "/v2/pet/"
    And request { "id": #(id),"category": {"id": 0,"name": "string"},"name": "#(newName)","photoUrls": ["string"],"tags": [{"id": 0,"name": "string"}],"status": "sold"}
    When method put
    Then status 200
    And match id == $.id
    And match $.name == newName
    And match $.status == 'sold'
    Then print 'Response - ID de la mascota: ',id

  @ConsultarStatusPet
  Scenario: Consultar la mascota modificada por status
    * def result = read('file:target/result.json')
    * def id = result.id
    Then print 'ID para consulta de la mascota: ',id
    * path "/v2/pet/findByStatus"
    * params { status: 'sold' }
    When method get
    Then status 200
    And match $..id contains id
    And match $..name contains newName
    And match each $..status == 'sold'
    Then print 'La mascota esta dentro de la lista de status SOLD'