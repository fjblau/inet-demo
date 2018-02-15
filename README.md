# Hyperledger Demo

First Install:

git clone https://github.com/fjblau/inet-demo.git
cd inet-demo/
composer archive create -t dir -n . -a inet-demo.bna
composer runtime install -n inet-demo -c PeerAdmin@hlfv1
composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile inet-demo.bna --file networkadmin.card
composer card import --file networkadmin.card
composer-rest-server

For Updates:

composer archive create -t dir -n . -a inet-demo.bna
composer network update  -a inet-demo.bna -c admin@inet-demo
