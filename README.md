# NoseAPI
Satisfy all your nosing needs!

The best **DOG API**!

### API Usage

|Request|Description|
|-|-|
|[`http://mc.connorcode.com:8888/`](http://mc.connorcode.com:8888/)|Returns Dog Image URI and Dog Image Index|
|[`http://mc.connorcode.com:8888/random`](http://mc.connorcode.com:8888/random)|Returns Dog Image as Jpeg|
|[`http://mc.connorcode.com:8888/dog/1234`](http://mc.connorcode.com:8888/dog/1234)|Returns dog image `1234` as a Jpeg|

### Host it yourself!

|#|Command|Description|
|-|-|-|
|0|`git clone https://github.com/Basicprogrammer10/NoseAPI.git`|Downlaod Sorce Code|
|1|`cd NoseAPI`|Go Into Nose API folder|
|2|`sudo docker build . -t basicprogrammer10/noseapi`|Build Docker Image|
|3|`sudo docker run -d -p 8080:8080  basicprogrammer10/noseapi`|Run Container with port 8080|
