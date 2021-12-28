import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface TextFieldProps {
  placeholder: string;
  onTextChange: (arg0: string) => void;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  containerStyle?: ViewStyle;
  inputStyle?: StyleProp<TextStyle>;
  validationTest?: (text: string) => boolean;
  errorMessage?: string | null;
}
