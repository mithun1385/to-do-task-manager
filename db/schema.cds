using { cuid } from '@sap/cds/common';

namespace todotask;

entity Tasks : cuid {   // ✅ THIS LINE IS IMPORTANT

  title  : String;

status : String enum {
  pending     @title: 'Pending';
  inprogress  @title: 'In Progress';
  completed   @title: 'Completed';
};
}