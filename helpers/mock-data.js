// Mock data for development when Cosmic CMS is not available
module.exports = {
  // Mock bucket response
  getObjects: function() {
    return Promise.resolve({
      objects: [
        {
          _id: 'mock-home',
          slug: 'home',
          title: 'Home Page',
          content: '<h1>Welcome to Our Website</h1><p>This is mock content for development.</p>',
          metadata: {
            headline: 'Welcome to Business Solutions Pro',
            subheadline: 'We provide excellent professional services and innovative solutions for your business needs',
            call_to_action_text: 'Ready to Get Started?',
            call_to_action_subtext: 'Join thousands of satisfied customers today',
            call_to_action_button_text: 'Contact Us Now',
            call_to_action_button_link: '/contact',
            carousel: [
              {
                title: 'Welcome to Our Service',
                description: 'Professional solutions for your business',
                image: { 
                  imgix_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop'
                },
                is_first: true,
                index: 0
              },
              {
                title: 'Quality Solutions',
                description: 'We deliver excellence in every project',
                image: { 
                  imgix_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=500&fit=crop'
                },
                is_first: false,
                index: 1
              },
              {
                title: 'Expert Team',
                description: 'Our professionals are here to help',
                image: { 
                  imgix_url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=500&fit=crop'
                },
                is_first: false,
                index: 2
              }
            ],
            blurbs: [
              {
                title: 'Professional Service',
                content: 'We provide top-notch professional services tailored to your specific business needs and requirements.',
                image: { 
                  imgix_url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop'
                }
              },
              {
                title: 'Expert Support',
                content: 'Our team of experts is available 24/7 to provide you with the support and guidance you need.',
                image: { 
                  imgix_url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=600&fit=crop'
                }
              },
              {
                title: 'Quality Results',
                content: 'We deliver high-quality results that exceed expectations and drive your business forward.',
                image: { 
                  imgix_url: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=600&fit=crop'
                }
              }
            ]
          }
        },
        {
          _id: 'mock-contact',
          slug: 'contact',
          title: 'Contact Us',
          content: '<h1>Contact Us</h1><p>Get in touch with us!</p>',
          metadata: {}
        },
        {
          _id: 'mock-blog',
          slug: 'sample-blog',
          title: 'Sample Blog Post',
          content: '<h1>Sample Blog</h1><p>This is a sample blog post for development.</p>',
          metadata: {
            hero: { url: 'https://via.placeholder.com/600x300' },
            teaser: 'This is a sample blog post teaser',
            author: 'Developer'
          }
        },
        {
          _id: 'mock-header',
          slug: 'header',
          title: 'Header',
          metadata: {
            site_title: 'Business Solutions Pro',
            logo: { imgix_url: 'https://via.placeholder.com/200x60/2c3e50/ffffff?text=BUSINESS+PRO' },
            favicon: { imgix_url: 'https://via.placeholder.com/32x32/2c3e50/ffffff?text=BP' }
          }
        },
        {
          _id: 'mock-nav',
          slug: 'nav',
          title: 'Navigation',
          metafields: [
            { title: 'Home', value: '/', children: [] },
            { title: 'Blog', value: '/blog', children: [] },
            { title: 'Contact', value: '/contact', children: [] },
            { title: 'FAQs', value: '/faqs', children: [] }
          ]
        },
        {
          _id: 'mock-social',
          slug: 'social',
          title: 'Social Media',
          metadata: {
            facebook: 'https://facebook.com/yourpage',
            twitter: 'https://twitter.com/yourhandle',
            google_plus: 'https://plus.google.com/yourhandle'
          }
        },
        {
          _id: 'mock-contact-info',
          slug: 'contact-info',
          title: 'Contact Information',
          metadata: {
            phone: '+1 (555) 123-4567',
            email: 'info@businesssolutionspro.com',
            address: '123 Business Solutions Drive<br>Professional Plaza, Suite 456<br>New York, NY 10001'
          }
        },
        {
          _id: 'mock-footer',
          slug: 'footer',
          title: 'Footer',
          metadata: {
            company_title: 'Business Solutions Pro',
            copyright: '© 2025 Business Solutions Pro. All rights reserved.',
            powered_by: 'Proudly powered by Cosmic JS'
          }
        }
      ]
    });
  },

  // Mock single object response
  getObject: function(params) {
    var slug = params.slug;
    var objects = {
      'contact-form': {
        object: {
          metadata: {
            to: 'test@example.com',
            subject: 'Contact Form Submission'
          }
        }
      }
    };
    
    return Promise.resolve(objects[slug] || { object: { metadata: {} } });
  },

  // Mock add object response
  addObject: function(data) {
    return Promise.resolve({
      object: Object.assign({
        _id: 'mock-' + Date.now()
      }, data)
    });
  }
};
