(function() {
 const messages = JSON.parse("{\"w7Qzog\":\"Certificate of NGO Registration from Ministry of Taxes, Law on legal entities registration, Articles and Memorandum of Association (translated)\",\"Pem0pg\":\"Registered as Tax Exempt, XO/XN/XR Number from HMRC\",\"RTZClg\":\"Can't find your school? For schools outside the US\",\"qQsrdQ\":\"here\",\"hfavSg\":\"Certificate of NPO Registration from local Government\",\"ugoBWw\":\"Non-profit or non-governmental organizations possessing a Notarized Certificate of Legal Entity and licensed by a department of the Central Government\",\"Yy2Y6A\":\"Go to Account settings\",\"jRLxBA\":\"Articles and Memorandum of Association\",\"u/fy6g\":\"Registered with the Ministry of Health and Family Welfare\",\"Hl4rwQ\":\"Looks like you’re currently on a {0} subscription. If you would like to switch to {1} now and cancel your existing subscription, please click 'Request upgrade' below.\",\"NVE/Jg\":\"Certificate of Registration as Onlus or Cooperative Sociale Legal Registration, Articles and Memorandum of Association\",\"GH6SqQ\":\"Registered with the Office of the National Cultural Affairs Commission in Thailand, under the Ministry of Culture, Articles of Association\",\"AwC/eQ\":\"Certificate of Registration as NPO/NGO, Articles and Memorandum of Association\",\"SXyreg\":\"Trusts operating on a non-profit basis for the public benefit\",\"EVDC3g\":\"Certificate of Registration as NPO/NGO, Articles and Memorandum of Association\",\"yVD5ug\":\"Certificate of NPO or Public Benefit Organization Registration from Council of Ministries, Articles and Memorandum of Association\",\"wf1JzQ\":\"Canadian Federal Non-profits registered with Industry Canada\",\"OO4Nww\":\"Certificate of NGO Registration from Local Government\",\"RSWKvg\":\"AMUTA number from State of Israel Registrar, Certificate of NPO Registration\",\"hb8Yng\":\"Social Welfare Corporations registered with the prefectural government and/or the Ministry of Health, Labour and Welfare\",\"5Uo2ww\":\"K-12 Teaching Certification\",\"K/u1fA\":\"Certificate of NPO Registration from Ministry of Justice/Interior\",\"oiKwew\":\"Get {0} entirely free \",\"ymDkvw\":\"to cancel your subscription via the Google Play store. Otherwise, you can continue using Canva with your existing subscription.\",\"Mv8tpw\":\"Certificate of NPO Registration from Ministry of Justice/Interior, Tax exempt\",\"+Q3MFw\":\"Certificate of NPO/NGO Registration from local Government\",\"Fbv6xQ\":\"School not found.\",\"wJ8lwA\":\"Non-profit legal entities in public benefit registered in the Central Registry of Public Benefit Organizations maintained by the Ministry of Justice\",\"7ygKrQ\":\"Registration Certificate of Civil Associations, Registered as Tax Exempt from local Government\",\"83hiqA\":\"Certificate of NGO Registration from Local Government, Articles and Memorandum of Association\",\"7sJ6+A\":\"Non-profit associations, foundations, or religious communities registered with the National Board of Patents and Registrations.\",\"FIANAQ\":\"Certificate of NPO Registration, Civil Association from Ministry of Justice, Federal Registry\",\"tgWLzw\":\"Certificate of Charity Registration “SCXXXXX” number from Office of Scottish Charity regulator\",\"9gr5rg\":\"See accepted documents\",\"87V2LQ\":\"Certificate of NPO Registration from Ministry of Justice/Interior\",\"v9aGsQ\":\"Tax Exempt Registration from Department of the Treasury, NPO Certificate of Registration, Articles and Memorandum of Association\",\"ux6A7w\":\"Certificate of NGO Registration from Local Government\",\"ybOtbA\":\"Koerperschaft des öffentlichen Rechts\",\"YHg45Q\":\"Close\",\"vUT/fQ\":\"Switch now\",\"Orf4nA\":\"Association/Foundation Registration Certificate from Ministry of Justice (IGJ Reg)\",\"FXlLmQ\":\"Registration Certificate of Foundation from State Register\",\"PqYyDw\":\"If you do not want to upgrade to {0} just yet, you can continue using Canva and come back to Account settings at any time to upgrade.\",\"wtN6NA\":\"School ID Card\",\"LC7qAg\":\"Certificate of NGO Registration from Registrar General’s Department, Articles and Memorandum of Association\",\"r1DQKg\":\"Certificate of NPO Registration, Civil from Ministry of Justice/Interior\",\"zqgFhg\":\"NPO/Association Registration Certificate\",\"QuG4bw\":\"Nonprofit or nongovernmental organizations established pursuant to association loi 1901 or fondation loi 1987\",\"fft7Kg\":\"I’ve canceled my subscription\",\"Z4g+sA\":\"Registered Certification as Association, Foundation, NPO with local Government\",\"LUlODQ\":\"Charities registered with the Australian Charities and Nonprofits Commission\",\"1yZwaw\":\"School Employment Status\",\"1sGzBQ\":\"Please enter a valid website, e.g. \\\"example.com\\\" or \\\"www.example.edu\\\".\",\"gJn9xw\":\"Associations, foundations, institutions, or religious communities approved by the Ministry of Taxation\",\"k4nVnw\":\"Certificate of Interiors registration from Palestine National Authority Ministry\",\"AK73Yg\":\"Registration Certificate of Trust or Society\",\"aGG4sg\":\"NPO Registration Certificate from Director General del Registro de Asocaciones y\",\"kkT0MQ\":\"Looks like you're currently on a {0} monthly subscription. Because you're a teacher, you get access to Pro features, as well as resources designed for classrooms, at no cost. Make the switch today!\",\"XDCDlw\":\"Registered as Tax Exempt by Ministry of Finance\",\"JW14Fg\":\"Public health organizations\",\"8pFJpg\":\"to cancel your subscription via the App Store. Otherwise, you can continue using Canva with your existing subscription.\",\"FhbRpw\":\"NPO Certificate of Registration\",\"T7SPRg\":\"Articles and Memorandum of Association (Translated to English)\",\"R0RqWg\":\"It looks like you have an existing subscription. If you would like to upgrade to {0} now, please follow the steps\",\"reBsmw\":\"NPO Certificate of Registration from Competent Registration Court, Articles and Memorandum of Association\",\"muc0kg\":\"Minister of Justice\",\"o+AZ6g\":\"Specified Nonprofit Activity Corporations (NPOs) certified by the prefectural government or Cabinet Office\",\"oWW1CQ\":\"In the meantime, you can continue to use Canva.\",\"67Py4w\":\"Associations, foundations, or religious communities eligible for income tax exemption under Chapter 7 of the Income Tax Act\",\"osBI3A\":\"Registration Certificate for Associations, Foundations, PBO from Ministry of Justice/Interior\",\"0WUCpQ\":\"NGO Registration Statue 1989, NGO Registration from Commisioner, Articles and Memorandum of Association\",\"HDqVbQ\":\"Certificate of Registration; Cabinet of Belgium – Dutch Vereniging Zonder Winstoogmerk\",\"K9xqDg\":\"NGO Registration Certificate from Kenya Government, Articles and Memorandum of Association\",\"pCLqOQ\":\"Certificate of NPO, Social Benefit Org, Civil Society Org from Junta de Asistencia Privada, Juntas de Beneficencia Privada or Indesol\",\"sWshyQ\":\"Certificate of NGO Registration from Department of Social Development, Articles and Memorandum of Association\",\"yX/8/A\":\"Certificate of Registration as NGO, Articles and Memorandum of Association\",\"XHriCg\":\"Not now\",\"GmFcNA\":\"Certificate of NPO Registration from Ministry of Justice or Taxpayers Registry\",\"rlgK7A\":\"Home School State Certification\",\"SCd9nA\":\"Tax exemption Act, Approved by the Office of Commissioner of Inland Revenue\",\"NpN7iw\":\"Certificate of NGO Registration, Articles and Memorandum of Association\",\"g8G4iA\":\"Certificate of Registration from Country Courts, Articles and Memorandum of Association\",\"HawmwQ\":\"Certificate of Registration as NPO/NGO from Ministry of Finance, Official Government Journal, Articles and Memorandum of Association\",\"uYeSow\":\"Certificate of NPO Registration from Local Government\",\"6gvZeg\":\"Otherwise, you can continue using Canva on your existing subscription.\",\"iHF7Ew\":\"Certificate of Registration as NPO/NGO, Articles and Memorandum of Association\",\"xuVKww\":\"Articles and Memorandum of Association\",\"8u4FxA\":\"Registration Certificate for Associations, Foundations, PBO from Ministry of Justice/Interior\",\"jvW2zg\":\"This field must not be empty.\",\"vzcidg\":\"NGO Registration Certificate from Local Companies Registration Office\",\"iQlq+Q\":\"Certificate of Foundation Registration from Fundaciones Sins Fines de Lucro\",\"MhTaHw\":\"CHY number from Revenue, Articles and Memorandum of Association\",\"fXJBfA\":\"Accepted documents\",\"O+j2xA\":\"Certificate of NPO/NGO Registration from local Government\",\"FAJZeA\":\"Nonprofit, non-governmental organizations or trusts established by deed or otherwise and approved as charitable by the Inland Revenue Department under Section 88 of the Inland Revenue Ordinance\",\"gT50cw\":\"Tax Exempt Registration from Registrar General\",\"D3NBog\":\"The website URL cannot be longer than 255 characters.\",\"04uaew\":\"Non-profit or non-governmental organizations possessing a Notarized Certificate of Legal Entity and licensed by a department of the Central Government\",\"pkb4cw\":\"Civil/simple Certification of Registration from Administracion Federal De Ingreos Publicos\",\"t/iC9w\":\"Certificate of Registration; Moniteur Belge – ASBL Association sans but lucratif, Articles and Memorandum of Association\",\"kN7RDg\":\"Contact us\",\"CTri4g\":\"NPO/NGO Registration Certificate from Ministry of Justice, Articles and Memorandum of Association\",\"DuNpYQ\":\"Companies pursuing activities described in Section 31 of the Companies Act, 2007, as amended\",\"Yypeaw\":\"Tax Exempt Registration from Department of the Treasury, NPO Certificate of Registration, Articles and Memorandum of Association\",\"fouKRQ\":\"Please enter a valid email address\",\"7wlamg\":\"Nonprofit or non-governmental organizations listed on the Charities Commission Register\",\"YxTUCg\":\"Certificate of NPO Registration from Chambers of Commerce\",\"uKlEhg\":\"Check eligibility guidelines\",\"YMD0Tg\":\"NPO Registration Certificate from Minister of Justice, Articles and Memorandum of Association\",\"U9Ishg\":\"Registered with the Ministry of Social Welfare as a Social Development Organization\",\"Y1Qz8w\":\"Foundations or associations approved as legal entities by the Ministry of Law and Human Rights\",\"unTMGQ\":\"We couldn’t upgrade your account, please contact support to upgrade.\",\"yZIwvA\":\"Tax Exempt Registration from Department of the Treasury, NPO Certificate of Registration, Articles and Memorandum of Association\",\"5c1uBQ\":\"Registration card of “Pessoa Colectiva”, Registration Certification from Ministry of Finance\",\"iRCt/A\":\"Public Interest Associations and Foundations authorized by the Public Interest Commission\",\"JxI2Yg\":\"Government entities assisting with public health\",\"jD9ikw\":\"Associations, foundations, or cooperatives with tax-deductibility registered with the Ministry of Interior\",\"zIhnKA\":\"Enter your school name\",\"yNz36A\":\"Nonprofit or non-governmental organizations with Public Benefit Organization\",\"13O32Q\":\"Certificate of Registration from National Security Service or as NGO from Rwanda Directorate, Articles and Memorandum of Association\",\"i8Q3GQ\":\"Public Benefit Organizations foundations, or associations registered in the National Court Register\",\"200CLg\":\"Back to Canva\",\"G6Hp2w\":\"Certificate of NGO Registration TRN Number from Ministry of Finance\",\"lvJ44A\":\"Request upgrade\",\"Q4lS7g\":\"Apply here\",\"e6q5zA\":\"Registered societies/non-profit organizations\",\"RV0sbA\":\"Thanks for submitting a request to upgrade to {1}. Our team will email you at {0} in the next few days.\",\"nlqF5g\":\"Certificate of NGO Registration from Ministry of Social Development, Articles and Memorandum of Association\",\"3PRo/w\":\"Koerperschaften des oeffentlichen Rechts, Verein, Stiftung öffentliches Recht, Stifung kirchliches Recht, treuhänderische Stiftung, gGmbH, gAG, gUG, gemeinnützige genossenschaften\",\"hYFE5Q\":\"Registered with the Securities and Exchange Commission (SEC)\",\"Jhn5zQ\":\"Canadian Charities registered with the Canada Revenue Agency\",\"Wj3BHg\":\"French legal publication\",\"eonDNg\":\"Non-profit or non-governmental organizations registered with the Commissioner of Charities\",\"iVsfbQ\":\"Certificate of NPO Registration, Gemeinnuetzigkeit, Stiftung, CH number\",\"COYsXQ\":\"Articles of Association, Registered with Registry of Societies (ROS), Tax Exempt Registered under Income Tax Law\",\"JnotMw\":\"Associations, Foundations, or other non-profit legal entities that possess public benefit\",\"j7KU5A\":\"Google Certified Educator Certificate\",\"LTDz4g\":\"To proceed with upgrading to {0}, please go to Account settings and under ‘Billing &amp; Plans’, click on ‘Create a new team’. Once you’ve created a team, navigate to <a href=\\\"{1}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">{1}</a> and you can start using {0} in your classroom!\",\"6axoWw\":\"Certificate of Social Charitable Registration number from IRS\",\"LuzPiw\":\"Registered nonprofit associations or foundations\",\"4Rx9dQ\":\"Income tax exempt not-for-profit organizations as defined by the ATO\",\"RzqTAw\":\"Upgrade to {0}\",\"4vIPdQ\":\"Organizations under group exemption\",\"6/tnTg\":\"School not found. <b><a data-anchor-id=\\\"enter-manually\\\">Enter manually</a></b>\",\"5n9fWw\":\"Certification of Registration as Foundation, Endowment from Foundation Register, Articles and Memorandum of Association\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["en"] = strings["en"] ? Object.assign(strings["en"], messages) : messages;
})();