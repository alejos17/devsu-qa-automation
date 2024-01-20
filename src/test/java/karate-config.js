function fn() {
    var env = karate.env;
    karate.configure('connectTimeout', 10000);
    karate.configure('readTimeout', 20000);
    karate.configure ('ssl', true);

    if(!env){
        env = 'uat';
    }
    karate.log('karate.env system property was:', env);

    if(env == 'uat'){
        var baseUrl = 'https://petstore.swagger.io/#/';
    }else if (env == 'prod'){
        var baseUrl = 'NO HAY PROD';
    }

    return {
        config: {
               baseUrl: baseUrl,
               env: env,
               content_Type: 'application/x-www-form-urlencoded',
               accept: '*/*',
               accept_Encoding: 'gzip, deflate, br',
               connection: 'keep-alive'
        },
    };

}