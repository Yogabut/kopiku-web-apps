import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Label } from "../Components/ui/label";
import { Textarea } from "../Components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Components/ui/select";
import { Checkbox } from "../Components/ui/checkbox";
import { Alert, AlertDescription } from "../Components/ui/alert";
import { Loader2, Upload, Coffee, Utensils, ShoppingBag } from "lucide-react";

export default function Index() {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [submenuList, setSubmenuList] = useState([]);
  const [selectedSubmenu, setSelectedSubmenu] = useState("");
  const [typeMenu, setTypeMenu] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submenuLoading, setSubmenuLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchSubmenu = async () => {
      try {
        setSubmenuList([]);
        setSelectedSubmenu("");
        setTypeMenu([]);
        setError("");

        if (category === "food") {
          setSubmenuLoading(true);
          const res = await axios.get("http://localhost:3000/api/food-sub");
          setSubmenuList(res.data);
        } else if (category === "non coffee") {
          setSubmenuLoading(true);
          const res = await axios.get("http://localhost:3000/api/non-coffee-sub");
          setSubmenuList(res.data);
        }
      } catch (err) {
        console.error("Error fetching submenu:", err);
        setError("Failed to load submenu data");
      } finally {
        setSubmenuLoading(false);
      }
    };

    if (category === "food" || category === "non coffee") {
      fetchSubmenu();
    } else {
      setSubmenuList([]);
      setSelectedSubmenu("");
      setTypeMenu([]);
    }
  }, [category]);

  const handleTypeMenuChange = (value, checked) => {
    setTypeMenu(prev =>
      checked ? [...prev, value] : prev.filter(item => item !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!category) {
      setError("Please select a category");
      return;
    }
    if (!productName.trim()) {
      setError("Please enter a product name");
      return;
    }
    if ((category === "food" || category === "non coffee") && !selectedSubmenu) {
      setError("Please select a submenu");
      return;
    }
    if ((category === "coffee" || category === "non coffee") && typeMenu.length === 0) {
      setError("Please select at least one temperature option");
      return;
    }
    if (!description.trim()) {
      setError("Please enter a description");
      return;
    }
    if (!price || parseFloat(price) <= 0) {
      setError("Please enter a valid price");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("category", category);
      formData.append("product_name", productName.trim());
      
      // Only append submenu if it's selected and required
      if (selectedSubmenu && (category === "food" || category === "non coffee")) {
        formData.append("submenu", selectedSubmenu);
      }
      
      // Only append type_menu if it's for coffee or non coffee
      if ((category === "coffee" || category === "non coffee") && typeMenu.length > 0) {
        formData.append("type_menu", typeMenu.join(","));
      }
      
      formData.append("description", description.trim());
      formData.append("price", parseFloat(price).toString());
      
      if (image) {
        formData.append("image", image);
      }

      // Log FormData contents for debugging
      console.log("FormData contents:");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      setLoading(true);
      
      const response = await axios.post("http://localhost:3000/api/add-menu", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 second timeout
      });
      
      console.log("Response:", response.data);
      setSuccess("Menu item has been added successfully!");
      
      // Reset form
      setCategory("");
      setProductName("");
      setSelectedSubmenu("");
      setTypeMenu([]);
      setDescription("");
      setPrice("");
      setImage(null);
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      
    } catch (err) {
      console.error("Error adding menu:", err);
      
      // More detailed error handling
      if (err.response) {
        // Server responded with error status
        setError(err.response.data?.error || `Server error: ${err.response.status}`);
        console.error("Response data:", err.response.data);
        console.error("Response status:", err.response.status);
      } else if (err.request) {
        // Request was made but no response received
        setError("No response from server. Please check your connection and try again.");
        console.error("No response received:", err.request);
      } else {
        // Something else happened
        setError("Failed to add menu item. Please try again.");
        console.error("Error message:", err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const categoryIcons = {
    coffee: Coffee,
    "non coffee": Coffee,
    food: Utensils,
    merchandise: ShoppingBag
  };

  const CategoryIcon = categoryIcons[category];

  return (
    <div className="min-h-screen bg-gradient-warm p-6 pt-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2F5249] mb-2">Add New Menu</h1>
          <p className="text-muted-foreground">Create a new menu item for Kopiku Cafe</p>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8">
            {CategoryIcon && <CategoryIcon className="h-8 w-8 text-[#2F5249]" />}
            <div>
              <h2 className="text-2xl font-semibold text-[#2F5249]">Menu Details</h2>
              <p className="text-muted-foreground">Fill in the information for your new menu item</p>
            </div>
          </div>

          {error && (
            <Alert variant="destructive" className="bg-destructive/10 border-destructive/20">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="bg-green-50 border-green-200 text-green-800">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Category */}
            <div className="space-y-3">
              <Label htmlFor="category" className="text-lg font-semibold text-foreground">Category</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger className="h-12 bg-gray-100 backdrop-blur-sm border-cafe-cream focus:ring-cafe-green shadow-soft">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="bg-orange-50">
                  <SelectItem value="coffee" className="hover:bg-amber-100  text-amber-800 hover:text-green-900">Coffee</SelectItem>
                  <SelectItem value="non coffee" className="hover:bg-amber-100  text-amber-800 hover:text-green-900">Non Coffee</SelectItem>
                  <SelectItem value="food" className="hover:bg-amber-100  text-amber-800 hover:text-green-900">Food</SelectItem>
                  <SelectItem value="merchandise" className="hover:bg-amber-100  text-amber-800 hover:text-green-900">Merchandise</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Product Name */}
            <div className="space-y-3">
              <Label htmlFor="productName" className="text-lg font-semibold text-foreground">Product Name</Label>
              <Input 
                id="productName"
                type="text" 
                value={productName} 
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter product name..."
                required
                className="h-12 bg-gray-100 backdrop-blur-sm border-cafe-cream focus:ring-cafe-green shadow-soft text-base"
              />
            </div>

            {/* Submenu */}
            {(category === "food" || category === "non coffee") && (
              <div className="space-y-3">
                <Label htmlFor="submenu" className="text-lg font-semibold text-foreground">Submenu</Label>
                {submenuLoading ? (
                  <div className="flex items-center gap-2 p-4 border rounded-lg bg-background/80 backdrop-blur-sm shadow-soft">
                    <Loader2 className="h-5 w-5 animate-spin text-cafe-green" />
                    <span className="text-muted-foreground">Loading submenu options...</span>
                  </div>
                ) : (
                  <Select value={selectedSubmenu} onValueChange={(val) => setSelectedSubmenu(val)} required>
                    <SelectTrigger className="h-12 bg-gray-100 backdrop-blur-sm border-cafe-cream focus:ring-cafe-green shadow-soft">
                      <SelectValue placeholder="Select a submenu" />
                    </SelectTrigger>
                    <SelectContent>
                      {submenuList.map(sub => (
                        <SelectItem 
                          key={sub.food_sub_id || sub.non_coffee_sub_id} 
                          value={String(sub.food_sub_id || sub.non_coffee_sub_id)}
                          className="hover:bg-amber-100  text-amber-800 hover:text-green-900 bg-orange-50"
                        >
                          {sub.food_sub_name || sub.non_coffee_sub_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            )}

            {/* Type Menu */}
            {(category === "coffee" || category === "non coffee") && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-foreground">Temperature Options *</Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["Hot", "Iced", "Hot & Iced"].map((type) => (
                    <div key={type} className="flex items-center space-x-3 p-4 border rounded-lg bg-background/80 backdrop-blur-sm hover:bg-cafe-cream/20 transition-all duration-300 shadow-soft hover:shadow-elegant">
                      <Checkbox
                        id={type}
                        checked={typeMenu.includes(type)}
                        onCheckedChange={(checked) => handleTypeMenuChange(type, checked)}
                        className="border-cafe-green data-[state=checked]:bg-cafe-green w-5 h-5"
                      />
                      <Label htmlFor={type} className="font-medium cursor-pointer text-base">{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="space-y-3">
              <Label htmlFor="description" className="text-lg font-semibold text-foreground">Description</Label>
              <Textarea 
                id="description"
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your menu item..."
                required
                rows={5}
                className="bg-gray-100 backdrop-blur-sm border-cafe-cream focus:ring-cafe-green resize-none shadow-soft text-base"
              />
            </div>

            {/* Price */}
            <div className="space-y-3">
              <Label htmlFor="price" className="text-lg font-semibold text-foreground">Price (IDR)</Label>
              <Input 
                id="price"
                type="number" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0"
                required
                min="0"
                step="0.01"
                className="h-12 bg-gray-100 backdrop-blur-sm border-cafe-cream focus:ring-cafe-green shadow-soft text-base"
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-3">
              <Label htmlFor="image" className="text-lg font-semibold text-foreground">Menu Image</Label>
              <div className="space-y-3">
                <Input 
                  id="image"
                  type="file" 
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/*"
                  className="h-12 bg-gray-100 backdrop-blur-sm border-cafe-cream focus:ring-cafe-green shadow-soft file:bg-[#2F5249] file:text-white file:border-0 file:rounded-md file:px-4 file:py-2 file:mr-4 hover:file:bg-green-950 hover:file:scale-105 hover:file:shadow-lg file:transition-all file:duration-200 file:cursor-pointer file:active:scale-95"
                />
                {image && (
                  <p className="text-sm text-muted-foreground px-1">
                    Selected: {image.name}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 justify-center flex">
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-[#2F5249] hover:bg-green-950 hover:scale-105 hover:shadow-lg active:scale-95 text-white font-semibold py-6 text-lg shadow-elegant transition-all duration-200"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                    Adding Menu Item...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-6 w-6" />
                    Add Menu Item
                  </>
                )}
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}