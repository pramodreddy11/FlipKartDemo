import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  products: any = [
    {
      Type: 'mobile',
      Brand: 'Mi',
      Productname: 'POCO X2 (Matrix Purple, 128 GB)',
      Imgurl:
        'https://rukminim1.flixcart.com/image/312/312/k65d18w0/mobile/w/u/h/poco-x2-mzb9013in-original-imafzz2hdysz9njg.jpeg?q=70',
      Instock: true,
      Specification: [
        '6 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        '16.94 cm (6.67 inch) Full HD+ Display',
        '64MP + 8MP + 2MP + 2MP | 20MP + 2MP Dual Front Camera',
        '4500 mAh Lithium-ion Polymer Battery',
        'Qualcomm Snapdragon 730G Processor',
        'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories',
      ],
      Price: '19,999',
    },
    {
      Type: 'mobile',
      Brand: 'Mi',
      Productname: 'Redmi Note 7 Pro (Space Black, 128 GB)',
      Imgurl:
        'https://rukminim1.flixcart.com/image/312/312/jskofww0/mobile/y/h/u/mi-redmi-note-7-pro-na-original-imafe4b62yeycjfq.jpeg?q=70',
      Instock: false,
      Specification: [
        '6 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        '16.94 cm (6.67 inch) Full HD+ Display',
        '64MP + 8MP + 2MP + 2MP | 20MP + 2MP Dual Front Camera',
        '4500 mAh Lithium-ion Polymer Battery',
        'Qualcomm Snapdragon 730G Processor',
        'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories',
      ],
      Price: '17,999',
    },
    {
      Type: 'mobile',
      Brand: 'iphone',
      Productname: 'Apple iPhone SE (Black, 64 GB)',
      Imgurl:
        'https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjfehbbqgb.jpeg?q=70',
      Instock: true,
      Specification: [
        '6 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        '16.94 cm (6.67 inch) Full HD+ Display',
        '64MP + 8MP + 2MP + 2MP | 20MP + 2MP Dual Front Camera',
        '4500 mAh Lithium-ion Polymer Battery',
        'Qualcomm Snapdragon 730G Processor',
        'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories',
      ],
      Price: '42,999',
    },
    {
      Type: 'mobile',
      Brand: 'iphone',
      Productname: 'Apple iPhone SE (white, 64 GB)',
      Imgurl:
        'https://rukminim1.flixcart.com/image/416/416/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqfsuzwa3dz.jpeg?q=70',
      Instock: true,
      Specification: [
        '6 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        '16.94 cm (6.67 inch) Full HD+ Display',
        '64MP + 8MP + 2MP + 2MP | 20MP + 2MP Dual Front Camera',
        '4500 mAh Lithium-ion Polymer Battery',
        'Qualcomm Snapdragon 730G Processor',
        'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories',
      ],
      Price: '42,999',
    },
    {
      Type: 'mobile',
      Brand: 'Oneplus',
      Productname: 'OnePlus 7T (Frosted Silver, 128 GB)  (8 GB RAM)',
      Imgurl:
        'https://rukminim1.flixcart.com/image/416/416/k1b1bbk0/mobile/y/e/b/oneplus-7t-hd1901-original-imafkwsyvmpx7xhf.jpeg?q=70',
      Instock: true,
      Specification: [
        '6 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        '16.94 cm (6.67 inch) Full HD+ Display',
        '64MP + 8MP + 2MP + 2MP | 20MP + 2MP Dual Front Camera',
        '4500 mAh Lithium-ion Polymer Battery',
        'Qualcomm Snapdragon 730G Processor',
        'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories',
      ],
      Price: '36,999',
    },
    {
      Type: 'mobile',
      Brand: 'Oneplus',
      Productname: 'OnePlus 7 Pro (Nebula Blue, 256 GB)  (8 GB RAM)',
      Imgurl:
        'https://rukminim1.flixcart.com/image/416/416/k0bbb0w0/mobile/z/q/w/oneplus-7-pro-gm1911-original-imafk5f7g6sswayh.jpeg?q=70',
      Instock: true,
      Specification: [
        '6 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        '16.94 cm (6.67 inch) Full HD+ Display',
        '64MP + 8MP + 2MP + 2MP | 20MP + 2MP Dual Front Camera',
        '4500 mAh Lithium-ion Polymer Battery',
        'Qualcomm Snapdragon 730G Processor',
        'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories',
      ],
      Price: '36,999',
    },
    {
      Type: 'mobile',
      Brand: 'RealMe',
      Productname: 'Realme 6 (Comet Blue, 64 GB)  (6 GB RAM)',
      Imgurl:
        'https://rukminim1.flixcart.com/image/416/416/kckud8w0/mobile/y/k/w/realme-6-rmx2001-original-imaftzgfyrnaj9wb.jpeg?q=70',
      Instock: true,
      Specification: [
        '6 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        '16.94 cm (6.67 inch) Full HD+ Display',
        '64MP + 8MP + 2MP + 2MP | 20MP + 2MP Dual Front Camera',
        '4500 mAh Lithium-ion Polymer Battery',
        'Qualcomm Snapdragon 730G Processor',
        'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories',
      ],
      Price: '36,999',
    },
    {
      Type: 'mobile',
      Brand: 'RealMe',
      Productname: 'Realme 6 (Comet White, 64 GB)  (6 GB RAM)',
      Imgurl:
        'https://rukminim1.flixcart.com/image/416/416/kc3p30w0/mobile/f/w/u/realme-6-rmx2001-original-imaftazphzthcbse.jpeg?q=70',
      Instock: true,
      Specification: [
        '6 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        '16.94 cm (6.67 inch) Full HD+ Display',
        '64MP + 8MP + 2MP + 2MP | 20MP + 2MP Dual Front Camera',
        '4500 mAh Lithium-ion Polymer Battery',
        'Qualcomm Snapdragon 730G Processor',
        'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories',
      ],
      Price: '36,999',
    },
    {
      Type: 'mobile',
      Brand: 'oppo',
      Productname: 'OPPO A5s (Blue, 32 GB)  (2 GB RAM)',
      Imgurl:
        'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/8/f/x/a5s-32-a-cph1909-oppo-2-original-imafggzyxwv5dwg6.jpeg?q=70',
      Instock: true,
      Specification: [
        '6 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        '16.94 cm (6.67 inch) Full HD+ Display',
        '64MP + 8MP + 2MP + 2MP | 20MP + 2MP Dual Front Camera',
        '4500 mAh Lithium-ion Polymer Battery',
        'Qualcomm Snapdragon 730G Processor',
        'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories',
      ],
      Price: '8,999',
    },
    {
      Type: 'mobile',
      Brand: 'oppo',
      Productname: 'OPPO A12 (Black, 32 GB)  (3 GB RAM)',
      Imgurl:
        'https://rukminim1.flixcart.com/image/416/416/kb1470w0/mobile/6/r/s/oppo-a12-cph2083-original-imafsh2hvz4f2sa5.jpeg?q=70',
      Instock: true,
      Specification: [
        '6 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        '16.94 cm (6.67 inch) Full HD+ Display',
        '64MP + 8MP + 2MP + 2MP | 20MP + 2MP Dual Front Camera',
        '4500 mAh Lithium-ion Polymer Battery',
        'Qualcomm Snapdragon 730G Processor',
        'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories',
      ],
      Price: '6,999',
    },
  ];
  selectproductdata: any = [];
  setdatials(product) {
    product.forEach((element) => {
      console.log(element);
      this.selectproductdata.push(element);
    });
  }
  getdetails() {
    return this.selectproductdata;
  }
  SingleselectedProduct: any = [];
  getspecOfselectedProduct(product) {
    debugger;
    this.SingleselectedProduct = this.products.filter((sproduct) => {
      return sproduct.Productname == product.Productname;
    });
  }
  constructor(private httprequest: HttpClient) {}

  getjsonData() {
    return this.httprequest.get('http://localhost:3000/sampledata');
  }
}
