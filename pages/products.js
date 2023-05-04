import { API_PRODUCT } from "@/lib/constant";
import { useEffect, useState } from "react";

const { default: Layout } = require("@/components/layout")
const { default: DataTable } = require("react-data-table-component")

export default function Products({products}) {
    const [allproducts, setallproducts] = useState([])

    useEffect(() => {
        setallproducts(products)
    },[])
    const columns = [
        {
            name: 'Product Name',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row =>(
              <p>{row.price} $</p>
            ),
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'Photos',
            selector: row => (
                <img 
                style={{width: "100px", padding: "3px 0 3px 0"}}
                src={row.thumbnail}
                />
            ),
            sortable: true,
        },
        {
            name: 'Action',
            selector: row =>(
                <>
          <button
            onClick={() =>
              alert("Edit function is not implemented yet!")
            }
            className="btn btn-primary me-2"
          >
            Edit
          </button>
          <button
            onClick={() =>
              alert("Delete function is not implemented yet!")
            }
            className="btn btn-danger"
          >
            Delete
          </button>
        </>
            ),
        sortable: true,
        },
    ];  

    function searchhandler(event) {
        const newData = products.filter((row) => {
          return row.title.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setallproducts(newData);
      }
    return (
        <Layout>
            <div className="container mt-5">
            <h3 className="pb-2">Product Collection - Table</h3>
            <DataTable
            columns={columns}
            data={allproducts}
            fixedHeader
            pagination
            actions={
              <>
                <div className="text-end">
                  <input
                    type="text"
                    className="rounded border"
                    style={{
                      padding: "10px 10px",
                      width: "300px",
                      fontSize: "15px",
                    }}
                    placeholder="find products here..."
                    onChange={searchhandler}
                  ></input>
                </div>
                </>
              }
            />
        </div>
        </Layout>
    );
};

export async function getServerSideProps(){
    const res = await fetch(`${API_PRODUCT}`)
    const resp = await res.json()
    return{
        props:{
            products: resp.products
        }
    }
}
