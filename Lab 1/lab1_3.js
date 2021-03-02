const http=require('http');
http.createServer(function(req,res)
{
    //the replace function removes any query strings and slashes
    //the toLowerCase functions makes it lower case 
path=req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
switch(path){
    case'':
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Homepage</h1>');
    break;

    case'/about':
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>About</h1>');
    break;

    case'/guestbook':
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<p>Guest Book<p>');
    break;
    
    default:
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('<h1>Not Found</h1>');
    
        break;
    }}).listen(8000);

    console.log('Server started on localhost:8000');
    console.log('press Ctrl & C to terminate ....');