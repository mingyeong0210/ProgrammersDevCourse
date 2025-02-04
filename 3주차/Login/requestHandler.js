// 이 파일은 라우터가 루트를 분배해서 각 경로를 알려주면 해당 경로에서 해야할 일을 알려주는 역할
function main(response) {
    console.log('main');
    
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Main page');
    response.end();
}

function login(response) {
    console.log('login');

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Login page');
    response.end();
}

let handle = {}; // key:value 로 이루어진 (사전같은) 변수 상자 
handle['/'] = main; // []가 key, = 오른쪽에 있는 것이 value
handle['/login'] = login; //key를 찾아오면 value를 만나게 해줌 

exports.handle = handle;