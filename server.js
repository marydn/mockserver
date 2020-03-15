const server = require('mockserver-node');
const client = require('mockserver-client').mockServerClient;
const port   = 1080;

server
    .start_mockserver({serverPort: port, verbose: true})
    .then(
        function() {
            client('localhost', port).mockAnyResponse(
                [
                    {
                        'httpRequest': {
                            'path': '/'
                        },
                        'httpResponse': {
                            'statusCode': 200,
                            'body': JSON.stringify({'bar': 'hola', 'foo': 'mundo'}),
                            'delay': {
                                'timeUnit': 'MILLISECONDS',
                                'value': 250,
                            }
                        }
                    },
                    {
                        'httpRequest': {
                            'path': '/foo'
                        },
                        'httpResponse': {
                            'statusCode': 200,
                            'body': JSON.stringify({'value': 'foo'})
                        }
                    },
                    {
                        'httpRequest': {
                            'path': '/bar'
                        },
                        'httpResponse': {
                            'statusCode': 200,
                            'body': JSON.stringify({'value': 'bar'})
                        }
                    },
                    {
                        'httpRequest': {
                            'path': '/foo-bar'
                        },
                        'httpResponse': {
                            'statusCode': 200,
                            'body': JSON.stringify({'value1': 'foo', 'value2': 'bar'})
                        }
                    },
                    {
                        'httpRequest': {
                            'method': 'GET',
                            'path': '/view/cart',
                            'queryStringParameters': {
                                'cartId': ['055CA455-1DF7-45BB-8535-4F83E7266092']
                            },
                            'cookies': {
                                'session': '4930456C-C718-476F-971F-CB8E047AB349'
                            }
                        },
                        'httpResponse': {
                            'body': 'some_response_body'
                        }
                    }
                ]
            ).then(
                function () {
                    console.log('created expectations');
                },
                function (error) {
                    console.error(error);
                }
            )
        }
    )