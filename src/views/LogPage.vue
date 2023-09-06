<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-segment value="workouts">
          <ion-segment-button value="workouts">
            <ion-label>Workouts</ion-label>
          </ion-segment-button>
          <ion-segment-button value="body">
            <ion-label>Body</ion-label>
          </ion-segment-button>
        </ion-segment>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon slot="icon-only" :icon="addOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Log</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Log" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonSegment, IonSegmentButton, IonLabel, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon } from '@ionic/vue';
import { addOutline } from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
