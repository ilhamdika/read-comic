import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Dropdown from "@/Components/Dropdown";

export default function ComicAdd (){
    return(
        <Authenticated>
             <div className="table-data">
				<div className="order">
                        <Link href={route('prototype.comic')}>
						    <PrimaryButton className="bg-green-500 mb-4">
                                Back
                            </PrimaryButton>
                        </Link>
						<h1 className="text-xl">Add Comic</h1>
					<div className="head">
					</div>
          <form>
                <InputLabel 
                    value="Title"
                    className="text-xl mt-2"
                />
                <TextInput
                    className="w-full"
                />
                
                
                <InputLabel 
                    value="Category"
                    className="text-xl mt-2"
                />
                <select name="cars" id="cars" className="w-full rounded-sm">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                </select>

                <InputLabel 
                    value="sinopsis"
                    className="text-xl mt-2"
                />
                <TextInput
                type="text"
                    className="w-full h-32"
                />
                <InputLabel
                    value="Thumbnail"
                    className="text-xl mt-2"
                />
                <TextInput
                    type="file"
                    className="w-full"
                />

                <PrimaryButton className="bg-blue-500 mt-4">
                    Add Category
                </PrimaryButton>
            </form>

                </div>
            </div>

        </Authenticated>
    )
}