import React             from "react";
import { Router, Scene } from "react-native-router-flux";
import { Font }          from "expo";
import ApiClientPage     from "react_native_template_1/src/page/ApiClientPage";
import ColorListPage     from "react_native_template_1/src/page/ColorListPage";
import TopPage           from "react_native_template_1/src/page/TopPage";
import {
  AlertComponentPage,
  AvatarComponentPage,
  BadgeComponentPage,
  ButtonComponentPage,
  ButtonGroupComponentPage,
  CheckboxComponentPage,
  DropdownComponentPage,
  ExpansionPanelComponentPage,
  ModalComponentPage,
  HeadingComponentPage,
  ListGroupComponentPage,
  SliderComponentPage,
  SwitchComponentPage,
  TextInputComponentPage,
  AnimatedComponentPage,
} from "react_native_template_1/src/page/originalComponents";

import {
  CameraApiPage,
  IconApiPage,
  ImagePickerApiPage,
  NotificationApiPage,
  SpeechApiPage
} from "react_native_template_1/src/page/expoApiComponents"

import {
  VisionApiPage
} from "react_native_template_1/src/page/googleCloudApiComponents"

export default class extends React.Component {

  componentWillMount() {
    this.setState({
      fontLoaded: false
    })
  }

  componentDidMount() {
    (async () => {
      await Font.loadAsync({
        "Nunito-Regular"      : require("./assets/fonts/Nunito-Regular.ttf"),
        "Nunito-Italic"       : require("./assets/fonts/Nunito-Italic.ttf"),
        "Nunito-Bold"         : require("./assets/fonts/Nunito-Bold.ttf"),
        "Nunito-SemiBold"     : require("./assets/fonts/Nunito-SemiBold.ttf"),
      });
      this.setState({
        fontLoaded: true
      })
    })()
  }

  render() {

    if (!this.state.fontLoaded)
      return null

    return (
      <Router>
        <Scene key="root">
          <Scene
            key="topPage"
            component={TopPage}
            title="top-page"
            // initial={true}
          />
          <Scene
            key="apiClientPage"
            component={ApiClientPage}
            title="api-client-page"
          />
          <Scene
            key="colorListPage"
            component={ColorListPage}
            title="color-list-page"
          />
          <Scene 
            key="alertComponentPage"
            component={AlertComponentPage}
            title="alert-component-page"
          />
          <Scene 
            key="avatarComponentPage"
            component={AvatarComponentPage}
            title="avatar-component-page"
          />
          <Scene 
            key="badgeComponentPage"
            component={BadgeComponentPage}
            title="badge-component-page"
          />
          <Scene 
            key="buttonComponentPage"
            component={ButtonComponentPage}
            title="button-component-page"
          />
          <Scene 
            key="buttonGroupComponentPage"
            component={ButtonGroupComponentPage}
            title="button-group-component-page"
          />
          <Scene 
            key="checkboxComponentPage"
            component={CheckboxComponentPage}
            title="checkbox-component-page"
          />
          <Scene 
            key="dropdownComponentPage"
            component={DropdownComponentPage}
            title="dropdown-component-page"
          />
          <Scene
            key="expansionPanelComponentPage"
            component={ExpansionPanelComponentPage}
            title="expansion-panel-component-page"
          />
          <Scene 
            key="headingComponentPage"
            component={HeadingComponentPage}
            title="heading-component-page"
          />
          <Scene 
            key="listGroupComponentPage"
            component={ListGroupComponentPage}
            title="list-group-component-page"
          />
          <Scene
            key="modalComponentPage"
            component={ModalComponentPage}
            title="modal-component-page"
          />
          <Scene
            key="sliderComponentPage"
            component={SliderComponentPage}
            title="slider-component-page"
          />
          <Scene 
            key="switchComponentPage"
            component={SwitchComponentPage}
            title="switch-component-page"
          />
          <Scene 
            key="textInputComponentPage"
            component={TextInputComponentPage}
            title="text-input-component-page"
          />
          <Scene
            key="animatedComponentPage"
            component={AnimatedComponentPage}
            title="animated-component-page"
          />

          {/* Expo Api */}
          <Scene
            key="cameraApiPage"
            component={CameraApiPage}
            title="camera-api-page"
          />
          <Scene
            key="iconApiPage"
            component={IconApiPage}
            title="icon-api-page"
          />
          <Scene
            key="imagePickerApiPage"
            component={ImagePickerApiPage}
            title="image-picker-api-page"
          />
          <Scene
            key="notificationApiPage"
            component={NotificationApiPage}
            title="notification-api-page"
          />
          <Scene
            key="speechApiPage"
            component={SpeechApiPage}
            title="speech-api-page"
          />

          {/* Google Cloud Api */}
          <Scene
            key="googleCloudVisionApiPage"
            component={VisionApiPage}
            title="vision-api-page"
          />
        </Scene>
      </Router>
    );
  }
}
