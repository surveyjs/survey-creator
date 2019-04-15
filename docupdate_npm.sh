mkdir __update_docs_temp
cd ./__update_docs_temp
mkdir service
git clone https://$GTTOKEN@github.com/surveyjs/service
mv ../docs/images .
cp -a ../docs/. ./service/surveyjs.io/App_Data/DocsEditor
mv ./images ../docs
cd ./service
git add ./surveyjs.io/App_Data/DocsEditor
git commit -m "Updated Creator API documentation"
git push
cd ../..
rm -rf __update_docs_temp