rm -rf ./build
FILES=$(ls)
mkdir build
cp -r $FILES build
cd build
rm build.sh
zip -r gchat.zip .
cd ..
mv build/gchat.zip .
rm -rf build