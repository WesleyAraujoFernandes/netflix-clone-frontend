import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  landingForm!: FormGroup;
  year = new Date().getFullYear();
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.landingForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  login() {
    this.router.navigate(['/login']);
  }

  getStarted() {
    this.router.navigate(['/signup'], {
      queryParams: { email: this.landingForm.value.email }
    })
  }

  reasons = [
    {
      title: 'Enjoy on your TV',
      text: 'Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      icon: 'tv'
    },
    {
      title: 'Download your shows to watch offline',
      text: 'Save your favourites easily and always have something to watch.',
      icon: 'file_download'
    },
    {
      title: 'Watch everywhere',
      text: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      icon: 'devices'
    },
    {
      title: 'Create profiles for kids',
      text: 'Send kids on adventures with their favourite characters in a space made just for them—free with your membership.',
      icon: 'face'
    }
  ]

  faqs = [
    {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.'
    },
    {
      question: 'How much does PulseScreen cost?',
      answer: 'Plans start at ₹149 a month. No extra costs, no contracts.'
    },
    {
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime. Sign in with your account to watch on the web or on devices like smartphones, tablets, smart TVs and streaming devices.'
    },
    {
      question: 'How do I cancel?',
      answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees and no penalties.'
    },
    {
      question: 'What can I watch on PulseScreen?',
      answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },
    {
      question: 'Is PulseScreen good for kids?',
      answer: 'The kids profile comes with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
    }
  ]
}
