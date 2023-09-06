<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Statistics</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Statistics</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list-header>Body</ion-list-header>
      <ion-list :inset="true">
        <ion-item>
          <ion-label>Weight</ion-label>
          <ion-text slot="end">75 kg</ion-text>
        </ion-item>

        <ion-item>
          <ion-label>Height</ion-label>
          <ion-text slot="end">180 cm</ion-text>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonText } from '@ionic/vue';
</script>
