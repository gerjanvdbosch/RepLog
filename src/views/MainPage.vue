<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="log" href="/log">
          <ion-icon aria-hidden="true" :icon="timerOutline" />
          <ion-label>Log</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="routines" href="/routines">
          <ion-icon aria-hidden="true" :icon="barbellOutline" />
          <ion-label>Routines</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="statistics" href="/statistics">
          <ion-icon aria-hidden="true" :icon="statsChart" />
          <ion-label>Statistics</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { barbellOutline, statsChart, timerOutline, personCircleOutline } from 'ionicons/icons';
</script>
