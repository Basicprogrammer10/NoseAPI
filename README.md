# NoseAPI
Satisfy all your nosing needs!

The best **DOG API**!

### API Usage

|Request|Description|
|-|-|
|`api.com/`|Returns Dog Image URI and DIg Image Index|
|`api.com/random`|Returns Dog Image as Jpeg|
|`api.com/dog/1234`|Returns dog image `####` as a Jpeg|

### Host it yurself!

|#|Command|Description|
|-|-|-|
|0|`git clone https://github.com/Basicprogrammer10/NoseAPI.git`|Downlaod Sorce Code|
|1|`sudo docker build . -t basicprogrammer10/noseapi`|Build Docker Image|
|2|`sudo docker run -d -p 8080:8080  basicprogrammer10/noseapi`|Run Container with port 8080|
