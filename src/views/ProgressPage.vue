<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Progress</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Progress</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list-header>
        <ion-text color="medium" class="ion-text-uppercase ion-margin-start" style="font-size: small; font-weight: normal;">
          Body
        </ion-text>
      </ion-list-header>

      <ion-list :inset="true" style="margin-top: 6px;">
        <ion-item :button="true">
          <ion-label>Weight</ion-label>
          <ion-text slot="end" color="medium">75 kg</ion-text>
        </ion-item>

        <ion-item :button="true">
          <ion-label>Height</ion-label>
          <ion-text slot="end" color="medium">180 cm</ion-text>
        </ion-item>

        <ion-item :button="true">
          <ion-label>Waist</ion-label>
          <ion-text slot="end" color="medium">82 cm</ion-text>
        </ion-item>
      </ion-list>

      <ion-list-header>
        <ion-text color="medium" class="ion-text-uppercase ion-margin-start" style="font-size: small; font-weight: normal;">
          Overall
        </ion-text>
      </ion-list-header>

      <ion-list :inset="true" style="margin-top: 6px;">
        <ion-item :button="true">
          <ion-label>Total workouts</ion-label>
          <ion-text slot="end" color="medium">453</ion-text>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonText } from '@ionic/vue';
</script>
