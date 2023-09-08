
// class Product {
//   constructor(
//     ProductID,
//     MemberID,
//     ProductNameE,
//     ProductNameA,
//     BrandName,
//     ProductTypeID,
//     Origin,
//     ColorID,
//     PackagingTypeID,
//     PackagingLevelID,
//     MnfCode,
//     MnfGLN,
//     ProvGLN,
//     ImageURL,
//     DetailsPage,
//     ChildProductID,
//     ChildQuantity,
//     UOMID,
//     Size,
//     BarCodeID,
//     BarCode,
//     BarCodeURL,
//     IsActive,
//     CreatedBy,
//     CreatedDate,
//     UpdatedBy,
//     UpdatedDate
//   ) {
//     this.ProductID = ProductID;
//     this.MemberID = MemberID;
//     this.ProductNameE = ProductNameE;
//     this.ProductNameA = ProductNameA;
//     this.BrandName = BrandName;
//     this.ProductTypeID = ProductTypeID;
//     this.Origin = Origin;
//     this.ColorID = ColorID;
    
//     this.PackagingTypeID = PackagingTypeID;
//     this.PackagingLevelID = PackagingLevelID;
//     this.MnfCode = MnfCode;
//     this.MnfGLN = MnfGLN;
//     this.ProvGLN = ProvGLN;
//     this.ImageURL = ImageURL;
//     this.DetailsPage = DetailsPage;
//     this.ChildProductID = ChildProductID;
//     this.ChildQuantity= ChildQuantity;
//     this.UOMID= UOMID;
//     this.Size = Size;
//     this.BarCodeID = BarCodeID;
//     this.BarCode= BarCode;
//     this.BarCodeURL= BarCodeURL;
//     this.IsActive = IsActive;
//     this.CreatedDate = CreatedDate;
//     this,CreatedBy=CreatedBy;
//     this.UpdatedBy= UpdatedBy;
//     this.UpdatedDate= UpdatedDate;
//   }
// }
// module.exports = Product;


class Product {
  constructor(
    id,
    user_type,
    slug,
    location_uk,
    have_cr,
    cr_documentID,
    document_number,
    fname,
    lname,
    email,
    mobile,
    image,
    address,
    address1,
    address2,
    po_box,
    mbl_extension,
    website,
    no_of_staff,
    companyID,
    district,
    building_no,
    additional_number,
    other_landline,
    unit_number,
    qr_corde,
    email_verified_at,
    password,
    code,
    verification_code,
    cr_number,
    cr_activity,
    company_name_eng,
    company_name_arabic,
    bussiness_activity,
    membership_type,
    member_category,
    other_products,
    gpc,
    product_addons,
    total,
    contactPerson,
    companyLandLine,
    documents,
    address_image,
    status,
    payment_type,
    payment_status,
    online_payment,
    remember_token,
    parent_memberID,
    member_type,
    invoice_file,
    otp_status,
    transaction_id,
    created_at,
    updated_at,
    gcpGLNID,
    gln,
    gcp_type,
    deleted_at,
    gcp_expiry,
    memberID,
    user_id,
    membership_category,
    remarks,
    upgradation_disc,
    upgradation_disc_amount,
    renewal_disc,
    renewal_disc_amount,
    membership_otherCategory,
    activityID,
    assign_to
  ) {
    this.id = id;
    this.user_type = user_type;
    this.slug = slug;
    this.location_uk = location_uk;
    this.have_cr = have_cr;
    this.cr_documentID = cr_documentID;
    this.document_number = document_number;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.mobile = mobile;
    this.image = image;
    this.address = address;
    this.address1 = address1;
    this.address2 = address2;
    this.po_box = po_box;
    this.mbl_extension = mbl_extension;
    this.website = website;
    this.no_of_staff = no_of_staff;
    this.companyID = companyID;
    this.district = district;
    this.building_no = building_no;
    this.additional_number = additional_number;
    this.other_landline = other_landline;
    this.unit_number = unit_number;
    this.qr_corde = qr_corde;
    this.email_verified_at = email_verified_at;
    this.password = password;
    this.code = code;
    this.verification_code = verification_code;
    this.cr_number = cr_number;
    this.cr_activity = cr_activity;
    this.company_name_eng = company_name_eng;
    this.company_name_arabic = company_name_arabic;
    this.bussiness_activity = bussiness_activity;
    this.membership_type = membership_type;
    this.member_category = member_category;
    this.other_products = other_products;
    this.gpc = gpc;
    this.product_addons = product_addons;
    this.total = total;
    this.contactPerson = contactPerson;
    this.companyLandLine = companyLandLine;
    this.documents = documents;
    this.address_image = address_image;
    this.status = status;
    this.payment_type = payment_type;
    this.payment_status = payment_status;
    this.online_payment = online_payment;
    this.remember_token = remember_token;
    this.parent_memberID = parent_memberID;
    this.member_type = member_type;
    this.invoice_file = invoice_file;
    this.otp_status = otp_status;
    this.transaction_id = transaction_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.gcpGLNID = gcpGLNID;
    this.gln = gln;
    this.gcp_type = gcp_type;
    this.deleted_at = deleted_at;
    this.gcp_expiry = gcp_expiry;
    this.memberID = memberID;
    this.user_id = user_id;
    this.membership_category = membership_category;
    this.remarks = remarks;
    this.upgradation_disc = upgradation_disc;
    this.upgradation_disc_amount = upgradation_disc_amount;
    this.renewal_disc = renewal_disc;
    this.renewal_disc_amount = renewal_disc_amount;
    this.membership_otherCategory = membership_otherCategory;
    this.activityID = activityID;
    this.assign_to = assign_to;
  }
}

module.exports = Product;

