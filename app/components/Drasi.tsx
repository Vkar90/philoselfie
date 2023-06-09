import clsx from 'clsx';
import React from 'react';

import AccordionBlock from '~/components/portableText/blocks/Accordion';

import Button from './elements/Button';
import List from './elements/List';
import TwoColumnLayout from './elements/TwoColumnLayout';
import Check from './icons/Check';

interface DrasiProps {
  data: any;
  showPageTitle?: boolean;
}

const Drasi: React.FC<DrasiProps> = () => {
  const accordionBlocks = [
    [
      {
        _key: '1',
        title: 'Αγγεία',
        body: '<li>Φυσιολογικός σχηματισμός κολλαγόνου</li><li>Φυσιολογική λειτουργία των αιμοφόρων αγγείων</li>',
      },
      {
        _key: '1',
        title: 'Αίμα',
        body: '<li>Φυσιολογικός σχηματισμός ερυθρών αιμοσφαιρίων και αιμοσφαιρίνης</li><li>Φυσιολογική αιμοποίηση</li><li>Φυσιολογική πήξη του αίματος</li>',
      },
      {
        _key: '1',
        title: 'Ανοσοποιητικό',
        body: '<p>Φυσιολογική λειτουργία του ανοσοποιητικού συστήματος και διατήρηση κατά τη διάρκεια και μετά από έντονη σωματική άσκηση.</p>',
      },
    ],
    [
      {
        _key: '2',
        title: 'Σύνθεση-Μεταβολισμός-Διατήρηση-Απορρόφηση',
        body: '<li>Φυσιολογική σύνθεση κυστεΐνης, αμινοξέων, πρωτεϊνών</li><li>Φυσιολογική σύνθεση και μεταβολισμός στεροειδών ορμονών, βιταμίνης D και ορισμένων νευροδιαβιβαστών</li><li>Φυσιολογικός μεταβολισμόςσιδήρου, πρωτεϊνών,γλυκογόνου,υδατανθράκων,ομοκυστεϊνης, βιταμίνης Α, μακροθρεπτικών συστατικών, λιπαρών οξέων, οξέων και βάσεων</li><li>Αύξηση απορρόφησης του σιδήρου και μεταφοράς του μέσα στον οργανισμό</li><li>Φυσιολογική απορρόφηση και χρησιμοποίηση του ασβεστίου και του φωσφόρου</li><li>Διατήρηση της κατάστασης των βλεννογόνων και της ισορροπίας των ηλεκτρολυτών</li><li>Διατήρηση φυσιολογικών επιπέδων τεστοστερόνης, γλυκόζης και ασβεστίου</li><li>Αναγέννηση της ανηγμένης (ενεργής) μορφής της βιταμίνης Ε</li>',
      },
    ],
    [
      {
        _key: '3',
        title: 'Δέρμα-Μαλλιά-Νύχια',
        body: '<li>Φυσιολογικός σχηματισμός κολλαγόνου</li><li>Φυσιολογική λειτουργία και χρωματισμός δέρματος, μαλλιών και νυχιών</li>',
      },
      {
        _key: '3',
        title: 'Δόντια-Ούλα',
        body: '<li>Απαιτείται για τη διατήρηση της φυσιολογικής κατάστασης των δοντιών</li><li>Φυσιολογικός σχηματισμός κολλαγόνου για τη φυσιολογική λειτουργία δοντιών και ούλων</li>',
      },
    ],
    [
      {
        _key: '4',
        title: 'Εγκέφαλος',
        body: '<li>Φυσιολογική νοητική επίδοση</li><li>Φυσιολογική γνωσιακή λειτουργία</li>',
      },
      {
        _key: '4',
        title: 'Εγκυμοσύνη-Γονιμότητα',
        body: '<li>Φυσιολογική γονιμότητα, σπερματογέννεση και αναπαραγωγή</li><li>Ανάπτυξη του μητρικού ιστού κατά την εγκυμοσύνη</li>',
      },
      {
        _key: '4',
        title: 'Ενέργεια-Κόπωση',
        body: '<li>Μείωση κούρασης και χρόνιας κόπωσης</li><li>Φυσιολογική λειτουργία των μεταβολικών διεργασιών</li>',
      },
    ],
    [
      {
        _key: '5',
        title: 'Θυροειδής',
        body: '<li>Φυσιολογική θυρεοειδική λειτουργία</li>',
      },
    ],
    [
      {
        _key: '6',
        title: 'Καρδιά',
        body: '<li>Φυσιολογική καρδιακή λειτουργία</li>',
      },
      {
        _key: '6',
        title: 'Κύτταρο',
        body: '<li>Διαδικασία κυτταρικής διαίρεσης και εξειδίκευσης</li>',
      },
    ],
    [
      {
        _key: '7',
        title: 'Μύες',
        body: '<li>Φυσιολογική λειτουργία των μυών</li>',
      },
    ],
    [
      {
        _key: '8',
        title: 'Νευρικό σύστημα',
        body: '<li>Φυσιολογική λειτουργία του νευρικού συστήματος</li><li>Φυσιολογική ψυχολογική λειτουργία</li>',
      },
    ],
    [
      {
        _key: '9',
        title: 'Οξυγόνο',
        body: '<li>Φυσιολογική μεταφορά του οξυγόνου στο σώμα</li>',
      },
      {
        _key: '9',
        title: 'Όραση',
        body: '<li>Διατήρηση της φυσιολογικής όρασης</li>',
      },
      {
        _key: '9',
        title: 'Ορμονικό',
        body: '<li>Ρύθμιση της ορμονικής δραστηριότητας</li>',
      },
      {
        _key: '9',
        title: 'Οστά',
        body: '<li>Διατήρηση της φυσιολογικής κατάστασης των οστών</li><li>Φυσιολογικός σχηματισμός του κολλαγόνου για τη φυσιολογική λειτουργία οστών και χόνδρων</li>',
      },
    ],
    [
      {
        _key: '10',
        title: 'Στομάχι',
        body: '<li>Φυσιολογική λειτουργία του νευρικού συστήματος</li><li>Φυσιολογική ψυχολογική λειτουργία</li>',
      },
      {
        _key: '10',
        title: 'Στρες',
        body: '<li>Προστασία των κυττάρων από το οξειδωτικό στρες</li>',
      },
      {
        _key: '10',
        title: 'Συνδετικός ιστός',
        body: '<li>Φυσιολογικός σχηματισμός και διατήρηση του συνδετικού ιστού</li>',
      },
    ],
    [
      {
        _key: '11',
        title: 'DNA',
        body: '<li>Φυσιολογική σύνθεση</li>',
      },
    ],
  ];

  return (
    <div>
      <div
        className={clsx(
          'flex w-full flex-col items-center rounded-b-xl bg-offWhite px-4 pb-4 pt-24',
        )}
      >
        <TwoColumnLayout
          column1={
            <>
              <h3 className="mb-4 text-xl font-bold">
                Το Philoselfie προάγει ενεργά την υγεία με τη δράση του*,
                συμβάλλοντας στα εξής:
              </h3>
              <p className="mb-12 text-sm">
                *Αποδεδειγμένοι ισχυρισμοί υγείας σύμφωνα με την EFSA
              </p>
            </>
          }
          column2={{
            src: 'https://cdn.shopify.com/s/files/1/0755/1808/3415/files/Screenshot_2023-06-06_at_1.07_2.png?v=1686302695',
            alt: 'Image Alt Text',
            width: 150,
            height: 157,
            key: 'column2',
          }}
          imageOnLeft={false}
          className=""
        />
        <div className="mx-40 w-full md:w-2/3">
          {accordionBlocks.map((groups) => (
            <AccordionBlock key={groups[0]._key} groups={groups} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drasi;
