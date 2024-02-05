# Codingame Profile Fetcher

[![npm version](https://img.shields.io/npm/v/codingame_profile_fetcher.svg)](https://www.npmjs.com/package/codingame_profile_fetcher)

A TypeScript library for retrieving Codingame user profile information. Easily fetch details such as user level, XP, achievements, programming languages, and more.

## Features

- Fetches basic user data including pseudonym, level, XP, rank, and more.
- Retrieves quest certifications, followers, followings, skills, and programming languages.
- Provides URLs for user avatar and cover images.

## Installation

```bash
npm install codingame_profile_fetcher
```

## Usage

### using get_codingamer_by_url

```ts
// Example 1: Valid profile URL
const validProfileUrl = "https://www.codingame.com/profile/your_codingame_handle";
try {
  const codingamerInstance = await get_codingamer_by_url(validProfileUrl);
  console.log("User Details:", codingamerInstance.pseudo, codingamerInstance.level, codingamerInstance.xp);
} catch (error) {
  console.error("Error:", error.message);
}

// Example 2: Invalid profile URL
const invalidProfileUrl = "https://www.example.com/profile/invalid_handle";
try {
  const codingamerInstance = await get_codingamer_by_url(invalidProfileUrl);
  console.log("User Details:", codingamerInstance.pseudo, codingamerInstance.level, codingamerInstance.xp);
} catch (error) {
  console.error("Error:", error.message);
}
```

### create instance manually

```ts
import { Codingamer } from 'codingame_profile_fetcher';

// Create a new Codingamer instance with a Codingame handle
const codingamer = new Codingamer('your_codingame_handle');

// Update basic data
try {
  await codingamer.update_basic_data();
  console.log("Basic Data:", codingamer.pseudo, codingamer.level, codingamer.xp);
} catch (error) {
  console.error("Error updating basic data:", error.message);
}

// Update quest certifications
try {
  await codingamer.update_quest_certifications();
  console.log("Quest Certifications:", codingamer.quest_certifications);
} catch (error) {
  console.error("Error updating quest certifications:", error.message);
}

// Update follower IDs
try {
  await codingamer.update_follower_ids();
  console.log("Follower IDs:", codingamer.follower_ids);
} catch (error) {
  console.error("Error updating follower IDs:", error.message);
}

// Update following IDs
try {
  await codingamer.update_following_ids();
  console.log("Following IDs:", codingamer.following_ids);
} catch (error) {
  console.error("Error updating following IDs:", error.message);
}

// Update topic skills
try {
  await codingamer.update_topic_skills();
  console.log("Topic Skills:", codingamer.topic_skills);
} catch (error) {
  console.error("Error updating topic skills:", error.message);
}

// Update programming languages
try {
  await codingamer.update_programming_languages();
  console.log("Programming Languages:", codingamer.programming_languages);
} catch (error) {
  console.error("Error updating programming languages:", error.message);
}

// Update achievements
try {
  await codingamer.update_achievements();
  console.log("Achievements:", codingamer.achievements);
} catch (error) {
  console.error("Error updating achievements:", error.message);
}
```

Get started with Codingame profile data retrieval effortlessly!