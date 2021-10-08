# expo-dev-client-boilerplate
Boilerplate for [Expo Custom Dev Clients](https://docs.expo.dev/clients/getting-started/)

Custom Dev Clients make it really easy to add native code to your projects. Xcode and Android Studio be gone!

## First Steps
1. 
    Clone this repository
    ```
    git clone https://github.com/Armster15/expo-dev-client-boilerplate
    ```

2. 
    Install dependencies
    ```
    npm install
    ```

3. 
    Create the custom dev client. Depending on whether you are using on iOS or Android, run either:
    ```
    npm run ios
    ```
    or
    ```
    npm run android
    ```

    **Note:** The first time you run this, it might take some time to create the build. Don't worry, this is only once. Once the first build finishes, the next time you run your project or add a native dependency, it will be much faster!

## Adding native dependencies
Depending on whether you are on iOS or Android, first follow the library's instructions on how to add the dependency to your project (linking, `pod install`, etc.)

Once you finish that, all you need to do is rebuild the dev client. Simply run `npm run ios` or `npm run android`