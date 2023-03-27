import { useCreateComponentsMutation, useUpdateComponentMutation } from '../../../features/api/dataApiSlice';
import { setEditCompDetails, setSideBarModal } from '../../../features/dataSlice';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Index = ({ setEditCompDetails, editCompDetails,subcategories, addComponent, setAddComponent, isEdit }) => {
  const [description, setDescription] = useState("");
  const [label, setLabel] = useState("");
  const [message, setMessage] = useState(false);
  const [imgurl, setImgUrl] = useState("");
  const dispatch = useDispatch()
  const [imgForm, setImgForm] = useState({});
  const [button, setButton] = useState(false);
  // const isEdit = useSelector((state) => state.dataSlice.isEditComponent)
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [createComp] = useCreateComponentsMutation()
  const [updateComp] = useUpdateComponentMutation()
  function ImgSetValue(event) {
    setImgUrl("");
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    setImgForm(event.target.files[0]);

  }
  const create = (event) => {
    event.preventDefault();
    setMessage(false);
    setButton(true)

    let payload = new FormData();
    payload.append("componentsPicture", imgForm);
    payload.append("name", label);
    payload.append("description", description);
    category !== '' && payload.append('subCategoryId', category)
    createComp(payload).unwrap().then((res) => {
      console.log(res, 'res')
      setButton(false)
      setAddComponent(false)
    }).catch((err) => {
      console.log(err, 'err')
      setButton(false)
    })
  };
  useEffect(() => {
    if (Object.keys(editCompDetails).length > 0) {
      setLabel(editCompDetails?.name)
      setDescription(editCompDetails?.description)
      setCategory(editCompDetails?.subCategoryId)
    }
  }, [editCompDetails?.id])
  
  const editComponents = async (e) => {
    e.preventDefault();
    setButton(true)
    let payload = {
      "description": description,
      "name": label
    }
    updateComp({ id: editCompDetails?.id, payload }).then((res) => {
      setButton(false)
      console.log(res, 'res')
      setAddComponent(false)
    }).catch((err) => {
      setButton(false)
      console.log(err, ';erer')
    })

  }
  useEffect(() => {
    if (addComponent == false) {
      setLabel('')
      setDescription('')
      setCategory('')
      setImgUrl('')
      setTimeout(() => {
        setEditCompDetails("")
      }, [1000])
    }
  }, [addComponent])
  return (
    <>
      {isEdit ?
        <>
          <div className="flex items-center  justify-end"><button onClick={
            () => {
              setEditCompDetails({})
              setAddComponent(false)
            }


          } className=""><svg className="mt-1 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64645 16.6464C6.45118 16.8417 6.45118 17.1583 6.64645 17.3536C6.84171 17.5488 7.15829 17.5488 7.35355 17.3536L6.64645 16.6464ZM12.3536 12.3536C12.5488 12.1583 12.5488 11.8417 12.3536 11.6464C12.1583 11.4512 11.8417 11.4512 11.6464 11.6464L12.3536 12.3536ZM11.6464 11.6464C11.4512 11.8417 11.4512 12.1583 11.6464 12.3536C11.8417 12.5488 12.1583 12.5488 12.3536 12.3536L11.6464 11.6464ZM17.3536 7.35355C17.5488 7.15829 17.5488 6.84171 17.3536 6.64645C17.1583 6.45118 16.8417 6.45118 16.6464 6.64645L17.3536 7.35355ZM12.3536 11.6464C12.1583 11.4512 11.8417 11.4512 11.6464 11.6464C11.4512 11.8417 11.4512 12.1583 11.6464 12.3536L12.3536 11.6464ZM16.6464 17.3536C16.8417 17.5488 17.1583 17.5488 17.3536 17.3536C17.5488 17.1583 17.5488 16.8417 17.3536 16.6464L16.6464 17.3536ZM11.6464 12.3536C11.8417 12.5488 12.1583 12.5488 12.3536 12.3536C12.5488 12.1583 12.5488 11.8417 12.3536 11.6464L11.6464 12.3536ZM7.35355 6.64645C7.15829 6.45118 6.84171 6.45118 6.64645 6.64645C6.45118 6.84171 6.45118 7.15829 6.64645 7.35355L7.35355 6.64645ZM7.35355 17.3536L12.3536 12.3536L11.6464 11.6464L6.64645 16.6464L7.35355 17.3536ZM12.3536 12.3536L17.3536 7.35355L16.6464 6.64645L11.6464 11.6464L12.3536 12.3536ZM11.6464 12.3536L16.6464 17.3536L17.3536 16.6464L12.3536 11.6464L11.6464 12.3536ZM12.3536 11.6464L7.35355 6.64645L6.64645 7.35355L11.6464 12.3536L12.3536 11.6464Z" fill="#475569"></path></svg></button></div>
          <div className="flex justify-between py-8">
            <p className="text-2xl font-extrabold leading-tight text-gray-800 w-2/3 capitalize">Edit Component</p>
          </div>
          <form onSubmit={editComponents} className="p-5 flex flex-col my-8 lg:my-0 xl:my-0 bg-white h-full">
            <label htmlFor="label" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">Label</label>
            <input id="label" value={label} type="text" required onChange={event => setLabel(event.target.value)} className="text-gray-600 focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="" />
            <label htmlFor="img" className="pt-5 text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">Select Image</label>
            {Object.keys(editCompDetails)?.length === 0 ? <div
              className=" relative gap-4 max-w-96 w-full items-center flex bg-opacity-5 border rounded border-gray-900 p-8 flex-wrap cursor-pointer">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6668 10.6667L16.0002 4L9.3335 10.6667"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 4V20"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <label
                htmlFor="file"
                className="cursor-pointer"
              >
                <div>
                  <p>
                    <input
                      type="file"
                      accept="image/gif,image/png, image/jpeg"
                      name="image"
                      title=""
                      id="file"
                      onChange={
                        ImgSetValue
                      }
                      className={`opacity-0 cursor-pointer absolute inset-0`}
                    />
                  </p>
                  <p className="text-base text-center font-medium text-gray-600">
                    Browse File
                    {/*<span className="text-gray-900 cursor-pointer hover:underline">Browse</span>*/}
                  </p>
                  <hr className="border-b border-slate-500 " />
                  <p className="text-xs leading-3 text-gray-600 mt-3">
                    Upload your Image
                  </p>
                </div>
              </label>
            </div> :
              <div className="h-32">
                <img
                  className='h-full w-full object-cover'
                  src={
                    editCompDetails?.componentsPicture
                  }
                />
              </div>

            }
            {/* <input id="name" value={name} type="text" required onChange={event => setName(event.target.value)} className="text-gray-600 focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="" /> */}
            <label htmlFor="Description" className="pt-5 text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">Description</label>
            <textarea id="label" value={description} type="text" required onChange={event => setDescription(event.target.value)} className="text-gray-600 focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-20 flex items-center pl-3 py-2 text-sm border-gray-300 rounded border shadow" placeholder="" />

            {editCompDetails?.subCategoryId && editCompDetails?.subCategoryId !== null &&
              <>
                <label htmlFor="catrgory" className="pt-5 text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">Select Subcategory</label>
                <select name="type"
                  value={category ? category : ""}
                  onChange={(event) => setCategory(event.target.value)}
                  className="text-gray-600 focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow cursor-pointer">
                  <option />
                  {
                    subcategories?.map(item => {
                      return (
                        <option value={item.id} key={item.id}>{item.name}</option>
                      )
                    })
                  }
                </select></>
            }
            <div className="flex flex-col gap-2">
              <button
                disabled={button}
                type={"submit"}
                // className={` px-5 py-3 mt-6 rounded-md text-white  transform duration-300  ease-in-out text-sm leading-[150%] font-medium`}
                className={` px-5 py-3 mt-6 rounded-md bg-zinc-900 text-white  transform duration-300  ease-in-out text-sm leading-[150%] font-medium`}
              >
                {(Object.keys(editCompDetails)?.length > 0 && "Update Components")}
              </button>
              <div
                onClick={() => {
                  setTimeout(() => {
                    setUiKitItem({})
                  }, 400)
                  setAddComponent(false)
                }}
                className="py-3 border text-center cursor-pointer border-zinc-400 hover:border-1 hover:border-rose-600 hover:text-rose-600 text-black rounded-[6px] font-medium text-sm leading-[150%]"
              >
                Cancel
              </div>
            </div>
          </form>
        </>

        : <>
          <div className="flex items-center  justify-end"><button onClick={
            () => setAddComponent(false)

          } className=""><svg className="mt-1 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64645 16.6464C6.45118 16.8417 6.45118 17.1583 6.64645 17.3536C6.84171 17.5488 7.15829 17.5488 7.35355 17.3536L6.64645 16.6464ZM12.3536 12.3536C12.5488 12.1583 12.5488 11.8417 12.3536 11.6464C12.1583 11.4512 11.8417 11.4512 11.6464 11.6464L12.3536 12.3536ZM11.6464 11.6464C11.4512 11.8417 11.4512 12.1583 11.6464 12.3536C11.8417 12.5488 12.1583 12.5488 12.3536 12.3536L11.6464 11.6464ZM17.3536 7.35355C17.5488 7.15829 17.5488 6.84171 17.3536 6.64645C17.1583 6.45118 16.8417 6.45118 16.6464 6.64645L17.3536 7.35355ZM12.3536 11.6464C12.1583 11.4512 11.8417 11.4512 11.6464 11.6464C11.4512 11.8417 11.4512 12.1583 11.6464 12.3536L12.3536 11.6464ZM16.6464 17.3536C16.8417 17.5488 17.1583 17.5488 17.3536 17.3536C17.5488 17.1583 17.5488 16.8417 17.3536 16.6464L16.6464 17.3536ZM11.6464 12.3536C11.8417 12.5488 12.1583 12.5488 12.3536 12.3536C12.5488 12.1583 12.5488 11.8417 12.3536 11.6464L11.6464 12.3536ZM7.35355 6.64645C7.15829 6.45118 6.84171 6.45118 6.64645 6.64645C6.45118 6.84171 6.45118 7.15829 6.64645 7.35355L7.35355 6.64645ZM7.35355 17.3536L12.3536 12.3536L11.6464 11.6464L6.64645 16.6464L7.35355 17.3536ZM12.3536 12.3536L17.3536 7.35355L16.6464 6.64645L11.6464 11.6464L12.3536 12.3536ZM11.6464 12.3536L16.6464 17.3536L17.3536 16.6464L12.3536 11.6464L11.6464 12.3536ZM12.3536 11.6464L7.35355 6.64645L6.64645 7.35355L11.6464 12.3536L12.3536 11.6464Z" fill="#475569"></path></svg></button></div>
          <div className="flex justify-between py-8">
            <p className="text-2xl font-extrabold leading-tight text-gray-800 w-2/3 capitalize">Create Component</p>
          </div>
          <form onSubmit={(event) => create(event)} className="p-5 flex flex-col my-8 lg:my-0 xl:my-0 bg-white h-full">
            <label htmlFor="label" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">Label</label>
            <input id="label" value={label} type="text" required onChange={event => setLabel(event.target.value)} className="text-gray-600 focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="" />
            <label htmlFor="img" className="pt-5 text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">Select Image</label>
            {imgurl === '' ? <div
              className=" relative gap-4 max-w-96 w-full items-center flex bg-opacity-5 border rounded border-gray-900 p-8 flex-wrap cursor-pointer">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6668 10.6667L16.0002 4L9.3335 10.6667"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 4V20"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <label
                htmlFor="file"
                className="cursor-pointer"
              >
                <div>
                  <p>
                    <input
                      type="file"
                      accept="image/gif,image/png, image/jpeg"
                      name="image"
                      title=""
                      id="file"
                      onChange={
                        ImgSetValue
                      }
                      className={`opacity-0 cursor-pointer absolute inset-0`}
                    />
                  </p>
                  <p className="text-base text-center font-medium text-gray-600">
                    Browse File
                    {/*<span className="text-gray-900 cursor-pointer hover:underline">Browse</span>*/}
                  </p>
                  <hr className="border-b border-slate-500 " />
                  <p className="text-xs leading-3 text-gray-600 mt-3">
                    Upload your Image
                  </p>
                </div>
              </label>
            </div> :
              <div className="h-32">
                <img
                  className='h-full w-full object-cover'
                  src={
                    imgurl
                  }
                />
              </div>

            }
            {
              <div className="flex flex-col items-start pt-4 md:gap-5 gap-5 ">
                <div className="inline-flex cursor-pointer space-x-2 relative items-center justify-end">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.41406 10.8748H1.125V9.58578L8.39391 2.29883L9.70102 3.60617L2.41406 10.8748Z"
                      fill="#475569"
                    ></path>
                    <path
                      d="M9.97782 3.32813L8.67188 2.02219L9.41391 1.3036C9.52852 1.18828 9.7043 1.125 9.86719 1.125C9.94738 1.12479 10.0268 1.14047 10.1009 1.17112C10.175 1.20177 10.2423 1.2468 10.2989 1.3036L10.6973 1.70203C10.7539 1.75857 10.7987 1.82574 10.8292 1.89968C10.8597 1.97361 10.8753 2.05284 10.875 2.13281C10.875 2.29688 10.8115 2.47149 10.6964 2.58657L9.97782 3.32813Z"
                      fill="#475569"
                    ></path>
                  </svg>

                  <p
                    htmlFor="file"
                    className="text-sm leading-none text-gray-600 cursor-pointer hover:underline"
                  >
                    <input
                      type="file"
                      id="file"
                      accept="image/png, image/gif, image/jpeg"
                      title=""

                      className="opacity-0 cursor-pointer absolute "
                      onChange={
                        ImgSetValue
                      }
                    />
                    Change Image
                  </p>
                </div>
                <div className={`inline-flex space-x-2 items-center justify-end `}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.375 3.40992L8.59008 2.625L6 5.21508L3.40992 2.625L2.625 3.40992L5.21508 6L2.625 8.59008L3.40992 9.375L6 6.78492L8.59008 9.375L9.375 8.59008L6.78492 6L9.375 3.40992Z"
                      fill="#475569"
                    ></path>
                  </svg>
                  <p
                    onClick={() => {
                      setImgUrl(
                        ""
                      );
                    }}
                    className="text-sm leading-none text-gray-600 cursor-pointer hover:underline"
                  >
                    Remove Image
                  </p>
                </div>
              </div>
            }
            {/* <input id="name" value={name} type="text" required onChange={event => setName(event.target.value)} className="text-gray-600 focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="" /> */}
            <label htmlFor="Description" className="pt-5 text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">Description</label>
            <textarea id="label" value={description} type="text" required onChange={event => setDescription(event.target.value)} className="text-gray-600 focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-20 flex items-center pl-3 py-2 text-sm border-gray-300 rounded border shadow" placeholder="" />

            <label htmlFor="catrgory" className="pt-5 text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">Select Subcategory</label>
            <select name="type"
              value={category ? category : ""}
              onChange={(event) => setCategory(event.target.value)}
              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow cursor-pointer">
              <option />
              {
                subcategories?.map(item => {
                  return (
                    <option value={item.id} key={item.id}>{item.name}</option>
                  )
                })
              }
            </select>
            <div className="flex flex-col gap-2">
              <button
                disabled={button}
                type={"submit"}
                // className={` px-5 py-3 mt-6 rounded-md text-white  transform duration-300  ease-in-out text-sm leading-[150%] font-medium`}
                className={` px-5 py-3 mt-6 rounded-md text-white bg-zinc-900 transform duration-300  ease-in-out text-sm leading-[150%] font-medium`}
              >
                {
                  (Object.keys(editCompDetails)?.length === 0 && "Create Components")
                }
              </button>
              <div
                onClick={() => {
                  setTimeout(() => {
                    setEditCompDetails({})
                  }, 400)
                  setAddComponent(false)
                }}
                className="py-3 border text-center cursor-pointer border-zinc-400 hover:border-1 hover:border-rose-600 hover:text-rose-600 text-black rounded-[6px] font-medium text-sm leading-[150%]"
              >
                Cancel
              </div>
            </div>
          </form>
        </>
      }
    </>

  )
}

export default Index