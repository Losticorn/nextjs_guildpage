import React from "react";
import { Container } from "../../components/Container";
import { Section } from "../../Section";

export default function BlogNewsPage({ params }) {
  return (
    <Container>
      <Section blog />
    </Container>
  );
}

// how do you fill this page?
// make an asynch fzunction thata will acteúpt slug as parameter "you do not need async funtion thus not returning promise
// you call this function in the slug page
// how you pass slug? thtroug params! 7:14
// you pass params.slug to the fuction that is fetching data cause it is key/value pair
