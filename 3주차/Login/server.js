let http = require('http'); //node.js가 http프로토콜을 사용할 수 있도록 모듈로 만들어둔 것을 require을 통해 불러서 사용 

function onRequest(request, response) { // node.js가 알아서 넣어줄 것임
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Hello Node.js');
    response.end();
}

http.createServer(onRequest).listen(8888); // localhost:8888