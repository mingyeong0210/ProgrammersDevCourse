let http = require('http'); //node.js가 http프로토콜을 사용할 수 있도록 모듈로 만들어둔 것을 require을 통해 불러서 사용 
let url = require('url'); 

function start(route) {
    // 서버를 생성하고 실행시키는 부분 
    function onRequest(request, response) { // node.js가 알아서 넣어줄 것임
        let pathname = url.parse(request.url).pathname; //parse : 문자열 캐치
        route(pathname);

        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write('Hello Node.js');
        response.end();
    }

    http.createServer(onRequest).listen(8888); // localhost:8888
}

exports.start = start;