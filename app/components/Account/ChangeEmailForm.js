import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import * as firebase from "firebase";
import { isLoading } from "expo-font";
import { reauthenticate } from "../../utils/Api";

export default function ChangeEmailForm(props) {
  const { email, setIsVisible, setReloadData, toastRef } = props;
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const updateEmail = () => {
    setError({});

    if (!newEmail || email === newEmail) {
      setError({ email: "El email no puede ser igual o estar vacio" });
    } else {
      setIsLoading(true);

      reauthenticate(password)
        .then(() => {
          firebase
            .auth()
            .currentUser.updateEmail(newEmail)
            .then(() => {
              setIsLoading(false);
              setReloadData(true);
              toastRef.current.show("Se actualizado el email exitosamente");
              setIsVisible(false);
            })
            .catch(() => {
              setError({ error: "Error al actualizar el email" });
              setIsLoading(false);
            });
        })
        .catch(() => {
          setError({ password: "La contraseña no es correcta" });
          setIsLoading(false);
        });
    }
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="email"
        containerStyle={styles.input}
        defaultValue={email && email}
        onChange={e => setNewEmail(e.nativeEvent.text)}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#c2c2c2"
        }}
        errorMessage={error.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={hidePassword}
        onChange={e => setPassword(e.nativeEvent.text)}
        rightIcon={{
          type: "material-community",
          name: hidePassword ? "eye-outline" : "eye-off-outline",
          color: "#c2c2c2",
          onPress: () => setHidePassword(!hidePassword)
        }}
        errorMessage={error.password}
      />
      <Button
        title="cambiar email"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => updateEmail()}
        loading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  input: {
    marginBottom: 10,
    marginTop: 10
  },
  btnContainer: {
    marginTop: 20,
    width: "95%"
  },
  btn: {
    backgroundColor: "#00a680"
  }
});
