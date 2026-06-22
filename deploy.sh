# Remove images
#rm -f /tmp/docker-images/*

# Save images
#docker save -o /tmp/docker-images/ecommerce_back_mongo.tar ecommerce_back_mongo
#docker save -o /tmp/docker-images/ecommerce_back.tar ecommerce_back
#
#scp /tmp/docker-images/ecommerce_back_mongo.tar root@195.35.25.140:/tmp/docker-images/ecommerce_back_mongo.tar
#scp /tmp/docker-images/ecommerce_back.tar root@195.35.25.140:/tmp/docker-images//ecommerce_back.tar


#scp -r . root@195.35.25.140:/tmp/portfolio

rsync -avz --exclude 'build' --exclude 'public/uploads' --exclude '.git' --exclude 'node_modules' --exclude '.idea' --exclude '.next' . root@195.35.25.140:/tmp/portfolio
