import axios from 'axios';

const API_URL = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clw4ro0nw0prf07w13s0g46xx/master';

const getItems = async (query) => {
    try {
        // Make a POST request to the GraphQL endpoint with the query
        const response = await axios.post(API_URL, {
            query,
        });
    
        // Return the data from the response
        return response.data;
    } catch (error) {
        // Handle any errors
        console.error('GraphQL request error:', error);
        throw new Error('Failed to fetch data from GraphQL API');
    }
};

const getCategories = async () => {
    try {
        const query = `query GetCategories {
            categories {
                id
                name
                icon {
                    url
                }
            }
        }`;
        const response = await getItems(query);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw new Error('Failed to fetch categories');
    }
};

const getBusinessList = async () => {
    try {
        const query = `query getBusinessList {
            businessLists {
                id
                name
                email
                address
                about
                images {
                    url
                }
                category {
                    name
                }
                contactPerson
            }
        }`;
        const response = await getItems(query);
        return response.data;
    } catch (error) {
        console.error("Error fetching business list:", error);
        throw new Error('Failed to fetch business list');
    }
};

const getBusinessByCategory = async (category) => {
    try {
        const query = `query getBusinessList {
            businessLists(where: {category: {name: "`+category+`"}}) {
                id
                name
                email
                address
                about
                images {
                    url 
                }
                category {
                    name
                }
                contactPerson
            }
        }`;
        const response = await getItems(query);
        return response.data;
    } catch (error) {
        console.error("Error fetching business by category:", error);
        throw new Error('Failed to fetch business by category');
    }
};

const createBooking = async (data) => {
    try {
        const query = `mutation createBooking {
            createBooking(
              data: {bookingStatus: Booked, 
                businessList: {connect: {id: "`+data.businessId+`"}}, 
                date: "`+data.date+`", 
                userEmail: "`+data.userEmail+`", 
                userName: "`+data.userName+`"}
            ) {
              id
            }
            publishManyBookings(to: PUBLISHED) {
              count
            }
          }`;

        const response = await axios.post(API_URL, { query: query });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data from GraphQL API');
    }
};

const getUserBookings = async(userEmail) => {
    const query = `query GetUserBookings {
        bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+userEmail+`"}) {
          userName
          userEmail
          date
          bookingStatus
          id
          businessList {
            id
            images {
              url
            }
            name
            address
            contactPerson
            email
            about
          }
        }
      }`

    const response = await axios.post(API_URL, { query: query });
    return response.data;
}


export default{
    getItems,
    getCategories,
    getBusinessList,
    getBusinessByCategory,
    createBooking,
    getUserBookings
}