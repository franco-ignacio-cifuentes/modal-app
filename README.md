# modal-app

```bash
npm i
```
```bash
npm run build
```
### browser: 
```bash
ng serve --open
```
### android: 
```bash
ionic capacitor run android -l --external
```
### if it fails, add local.properties file to android folder with 
```bash 
sdk.dir=android_sdk_location
```


## Expected behavior: the button with the star should move when we move the modal
> [!IMPORTANT]
> <img src="https://github.com/franco-ignacio-cifuentes/modal-app/assets/51925738/ff9cc8f9-b2e8-4a02-9fca-c3430a4c6dc2" width="300px">

### By adding [ngClass]="buttonClass" to the ion-button with the "star" CSS class, we can see this. It is not the expected behavior but it is pretty close. It moves the button after the breakpoint changes.
<img src="https://github.com/franco-ignacio-cifuentes/modal-app/assets/51925738/a41cbacd-c7f2-42e9-9244-4071818540b4" width="300px">

## Google maps works as expected

<img src="https://github.com/franco-ignacio-cifuentes/modal-app/assets/51925738/cabe7e04-c79e-4325-8762-7087366dbdba" width="300px">

