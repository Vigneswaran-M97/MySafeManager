import { Alert } from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const Biometrics_Access = () => {
  var init_bio = new ReactNativeBiometrics();
  init_bio
    .isSensorAvailable()
    .then(data => {
      Alert.alert(BiometryTypes.Biometrics)
      if (data.available && data.biometryType == BiometryTypes.Biometrics) {
        init_bio.simplePrompt({promptMessage: 'Login',cancelButtonText:'not now'}).then(return_data => {
          if (return_data.success) {
            
          } else {
          }
        });
      }else{

      }
    })
    .catch(() => {
      console.log('biometrics failed');
    });
};
export default Biometrics_Access;